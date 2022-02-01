import React, { useState } from "react";
import Modal from "./Modal";

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
        <input type="submit" value="UPDATE" className="button" />
      </form>
      <button className="button" onClick={onClose}>
        CANCEL
      </button>
    </Modal>
  );
};

export default FormDlg;
