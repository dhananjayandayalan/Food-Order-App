import { Fragment } from "react";
import ReactDOM from "react-dom";

import classes from "./Modal.module.css";

const Backdrop = ({ onClick }) => (
  <div className={classes.backdrop} onClick={onClick} />
);

const Overlay = ({ children }) => (
  <div className={classes.modal}>
    <div className={classes.content}>{children}</div>
  </div>
);

const overlayId = document.getElementById("overlay");

const Modal = ({ children, onClick }) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(<Backdrop onClick={onClick} />, overlayId)}
      {ReactDOM.createPortal(<Overlay>{children}</Overlay>, overlayId)}
    </Fragment>
  );
};

export default Modal;
