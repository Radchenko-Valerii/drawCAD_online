import React, { useEffect, useRef, useState } from "react";
import { Modal, Button } from "react-bootstrap";
import {useParams} from 'react-router-dom'
import canvasState from "../../store/canvasState";

const ModalWindow = (props) => {
  const usernameRef = useRef();
  const [modalShow, setModalShow] = useState(true);
  const params = useParams();
  

  const connectionHandler = () => {
    canvasState.setUsername(usernameRef.current.value);
    setModalShow(false);
  };

  useEffect(() => {
    if(canvasState.username){
      const socket = new WebSocket("ws://localhost:5000/");
      canvasState.setSocket(socket);
      canvasState.setSessionId(params.id);
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

  }

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      show={modalShow}
      onHide={() => {}}
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Hello user!
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Please enter your name</h4>
        <input type="text" ref={usernameRef} />
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={() => connectionHandler()}>Enter</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalWindow;
