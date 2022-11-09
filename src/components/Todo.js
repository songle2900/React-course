import { useState } from "react";
import Modal from "./Modal";
import Backdrop from "./Backdrop";

// props are javascript object
function Todo(props) {
  // useState is always returns Array with exactly two element
  const [ModalIsOpen, setModalIsOpen] = useState(false);

  function deleteHandler() {
    setModalIsOpen(true);
  }

  function closeModalHandler() {
    setModalIsOpen(false);
  }

  return (
    <div className="card">
      <h2>{props.text}</h2>
      <div className="actions">
        {/* No parentheses() needed on onClick prop because it will execute the line right away */}
        <button className="btn" onClick={deleteHandler}>
          Delete
        </button>
      </div>
      {ModalIsOpen ? (
        <Modal onCancle={closeModalHandler} onConfirm={closeModalHandler} />
      ) : null}
      {ModalIsOpen ? <Backdrop onClick={closeModalHandler} /> : null}
    </div>
  );
}

export default Todo;
