import React, { useRef, useState } from 'react';
import {Modal, Button} from "react-bootstrap";
import canvasState from '../../store/canvasState';

const ModalWindow = (props) => {
  const usernameRef = useRef();
  const [modalShow, setModalShow] = useState(true);

  const connectionHandler = () =>{
    canvasState.setUsername(usernameRef.current.value);
    setModalShow(false);
  }

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      show={modalShow}
      onHide={()=> {}}
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Hello user!
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Please enter your name</h4>
        <input type="text" ref={usernameRef}/>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={()=> connectionHandler()}>Enter</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalWindow;

