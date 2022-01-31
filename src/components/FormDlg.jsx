import React, { useState } from "react";
import Modal from "./Modal";

const FormDlg = (props) => {
  const { show, onClose, title, updateNames } = props;

  const [nameA, setNameA] = useState("");
  const [nameB, setNameB] = useState("");

  function handleSubmit() {
    updateNames(nameA, nameB);
  }

  return (
    <Modal show={show} onClose={onClose} title={title}>
      <form onSubmit={handleSubmit}>
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
        <button className="button" onClick={onClose}>
          CANCEL
        </button>
      </form>
    </Modal>
  );
};

export default FormDlg;
