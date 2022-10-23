import React, { useEffect } from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Toast from 'react-bootstrap/Toast';
import { useSelector, useDispatch } from 'react-redux';
import { toastHide } from '../store/actions';


function ToastComponent() {
  const toastState= useSelector(state => state.toast.state);
  const backGround= useSelector(state => state.toast.textType);
  const toastMessage = useSelector(state => state.toast.payload);
  const dispatch = useDispatch();

  const hideToast = () => {
    dispatch(toastHide())
  }

  useEffect(() => {
  }, [toastState, backGround, toastMessage])

  return (
    <Row className="justify-content-md-center">
      <Col md="auto">
        <Toast show={toastState} onClose={hideToast} bg={backGround} delay={5000} autohide>
          <Toast.Header>
            <img
              src="holder.js/20x20?text=%20"
              className="rounded me-2"
              alt=""
            />
            <strong className="me-auto">Esemény értesítő</strong>
          </Toast.Header>
          <Toast.Body className={'text-white'}>{toastMessage} </Toast.Body>
        </Toast>
      </Col>
    </Row>
  );
}

export default ToastComponent;