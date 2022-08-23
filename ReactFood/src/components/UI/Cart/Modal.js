import classes from "./Modal.module.css";
import React, { Fragment } from "react";
import { ReactDOM } from "react";

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

const Modal = props => {
  return (
    <Fragment>
      {ReactDOM.createPortal(<Backdrop />, overlayElement)}
      {ReactDOM.createPortal(<ModalOverlay />, overlayElement)}
    </Fragment>
  );
};
export default Modal;
