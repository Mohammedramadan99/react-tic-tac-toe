import React, { useEffect, useRef } from "react";
import "./Modal.css";

const Modal = (props) => {
  const { show, onClose, title } = props;

  /* Effect hook handles the fadeOut animation */
  const coverDiv = useRef();
  const modalDiv = useRef();

  useEffect(() => {
    const cover = coverDiv.current;
    if (show) cover.style.display = "flex";
    else {
      const modal = modalDiv.current;
      modal.style.animation = "fadeOut 1s forwards";
      setTimeout(() => {
        modal.style = "";
        cover.style.display = "none";
      }, 1000);
    }
  }, [show]);

  function handleClick() {
    onClose();
  }

  function handleClickModal(e) {
    e.stopPropagation();
    return;
  }

  return (
    <div className="cover" onClick={handleClick} ref={coverDiv}>
      <div className="modal-window" onClick={handleClickModal} ref={modalDiv}>
        <h2 className="modal-header">{title}</h2>
        {props.children}
      </div>
    </div>
  );
};

export default Modal;
