import React, { useState } from "react";
import Modal from "./Modal";
import "./FormDlg.css";

const FormDlg = (props) => {
  const { show, onClose, title, updateNames } = props;

  const [nameA, setNameA] = useState("");
  const [nameB, setNameB] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    updateNames(nameA, nameB);
    onClose();
  }

  return (
    <Modal show={show} onClose={onClose} title={title}>
      <form onSubmit={(e) => handleSubmit(e)}>
        <label className="label">
          Name A
          <input
            type="text"
            className="textInput"
            value={nameA}
            onChange={(e) => setNameA(e.target.value)}
          />
        </label>
        <label className="label">
          Name B
          <input
            type="text"
            className="textInput"
            value={nameB}
            onChange={(e) => setNameB(e.target.value)}
          />
        </label>
        <div className="btn-container">
          <button type="button" className="button" onClick={onClose}>
            CANCEL
          </button>
          <input type="submit" value="UPDATE" className="button" />
        </div>
      </form>
    </Modal>
  );
};

export default FormDlg;
