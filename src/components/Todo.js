import { useState } from "react";
import Modal from "./Modal";
import Backdrop from "./Backdrop";

const Todo = ({ title }) => {
  const [showModal, setShowModal] = useState(false);

  const deleteHandler = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="card">
      <h2>{title} </h2>
      <div className="actions">
        <button className="btn" onClick={deleteHandler}>
          Delete
        </button>
      </div>
      {showModal && <Modal onCancel={closeModal} onConfirm={closeModal} />}
      {showModal && <Backdrop onClick={closeModal} />}
    </div>
  );
};

export default Todo;
