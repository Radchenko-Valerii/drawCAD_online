import { observer } from "mobx-react-lite";
import React, { useEffect, useRef } from "react";
import canvasState from "../../store/canvasState";
import toolState from "../../store/toolState";
import Brush from "../../tools/Brush";
import styles from "./canvas.module.scss";

const Canvas = observer(() => {
  const canvasRef = useRef();

  useEffect(() => {
    canvasState.setCanvas(canvasRef.current);
    toolState.setTool(new Brush(canvasRef.current));
  }, []);

  const mouseDownHandler = () => {
    canvasState.pushToUndoList(canvasRef.current.toDataURL())
  }

  return (
    <div className={styles.canvas}>
      <canvas onMouseDown={()=> mouseDownHandler()} ref={canvasRef} width={840} height={594} />
    </div>
  );
});

export default Canvas;
