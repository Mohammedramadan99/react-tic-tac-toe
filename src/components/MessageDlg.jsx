import Modal from "./Modal";

const MessageDlg = (props) => {
  const { message, onClose, show, title } = props;

  return (
    <Modal show={show} onClose={onClose} title={title}>
      <p>{message}</p>
      <button className="button" onClick={onClose}>
        OK
      </button>
    </Modal>
  );
};

export default MessageDlg;
