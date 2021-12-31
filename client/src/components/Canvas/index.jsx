import { observer } from "mobx-react-lite";
import React, { useEffect, useRef } from "react";
import canvasState from "../../store/canvasState";
import toolState from "../../store/toolState";
import Brush from "../../tools/Brush";
import Tool from "../../tools/Tool";
import ModalWindow from "../ModalWindow";
import styles from "./canvas.module.scss";
import {useParams} from 'react-router-dom'
import Rect from "../../tools/Rect";
import Eraser from "../../tools/Eraser";


const Canvas = observer((props) => {
  const canvasRef = useRef();
  const params = useParams();
  

  useEffect(() => {
    canvasState.setCanvas(canvasRef.current);
    
  }, []);

  useEffect(() => {
    if(canvasState.username){
      const socket = new WebSocket("ws://localhost:5000/");
      canvasState.setSocket(socket);
      canvasState.setSessionId(params.id);
      toolState.setTool(new Brush(canvasRef.current, socket, params.id));
      socket.onopen = () => {
        socket.send(JSON.stringify({
          id: params.id,
          username: canvasState.username,
          method: "connection"
        }))
      }
      socket.onmessage = (event) => {
        let msg = JSON.parse(event.data)
        switch(msg.method){
          case "connection":
            console.log(`User ${msg.username} connect`)
            break;
          case "draw":
            drawHandler(msg)
            break;      
        }
      }
    }
  }, [canvasState.username]);

  const drawHandler=(msg)=>{
    const figure = msg.figure;
    const ctx = canvasRef.current.getContext('2d');
    switch (figure.type){
      case "brush": 
        Brush.draw(ctx, figure.x, figure.y)
        break
      case "eraser":
        Eraser.draw(ctx, figure.x, figure.y, "white")
        break
      case "finish":
        ctx.beginPath();
        break;
      case "rect":
        Rect.staticDraw(ctx, figure.x, figure.y, figure.width, figure.height)
    }
  }

  const mouseDownHandler = () => {
    canvasState.pushToUndoList(canvasRef.current.toDataURL())
  }

  return (
    <div className={styles.canvas}>
      <ModalWindow/>
      <canvas onMouseDown={()=> mouseDownHandler()} ref={canvasRef} width={840} height={594} />
    </div>
  );
});

export default Canvas;
