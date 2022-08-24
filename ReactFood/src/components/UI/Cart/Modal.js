import classes from "./Modal.module.css";
// import React, { Fragment } from "react";
import ReactDOM from "react-dom";

const Backdrop = (props) => {
  return <div className={classes.backdrop}></div>;
};
const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const overlayElement = document.getElementById(`overlay`);

const Modal = (props) => {
  return (
    <div>
      {ReactDOM.createPortal(<Backdrop></Backdrop>, overlayElement)}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        overlayElement
      )}
    </div>
  );
};
export default Modal;
