import React from "react";
import classes from "./ErrorModal.module.css";
import Card from "./Card";
import Button from "./Button";

const ErrorModal = ({ title, message, errorHandler }) => {
  
  return (
    <div className={classes.backdrop} onClick={errorHandler}>
      <Card className={classes.modal}>
        <header className={classes.header}>
          <h2 className={classes.headerh2}>{title}</h2>
        </header>

        <div className={classes.content}>
          <p>{message}</p>
        </div>
        <footer className={classes.actions}>
          <Button errorHandler={errorHandler}>Okay</Button>
        </footer>
      </Card>
    </div>
  );
};

export default ErrorModal;
