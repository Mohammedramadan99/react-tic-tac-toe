import "./Modal.css";

const Modal = (props) => {
  const { show, onClose, title } = props;

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
        <h2 className="modal-header">{title}</h2>
        {props.children}
      </div>
    </div>
  );
};

export default Modal;
