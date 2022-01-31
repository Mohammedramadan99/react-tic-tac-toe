import "./Modal.css";

const Modal = (props) => {
  const { show, onClose, header } = props;

  function handleClick() {
    onClose();
  }

  return (
    <div
      className="cover"
      style={{ display: show ? "flex" : "none" }}
      onClick={handleClick}
    >
      <div className="modal-window">
        <h2 className="modal-header">{header}</h2>
        {props.children}
      </div>
    </div>
  );
};

export default Modal;
