import React from "react";
import "./Modal.scss";

const Modal = ({ children, showHide }) => {
  return (
    <>
      <div className="modal">
        <div className="modal-wraper">
          <div className="header">
            <span>Title</span>
            <button onClick={() => showHide(false)}>X</button>
          </div>
          <div className="modal-body">{children}</div>
        </div>
      </div>
    </>
  );
};

export default Modal;
