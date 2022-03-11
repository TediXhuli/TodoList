import React from "react";
import { useState } from "react";
import Modal from "./Modal";
import Backdrop from "./Backdrop";

function Todo(props) {
  const [modalIsOpen, SetModalIsOpen] = useState(false);

  function deleteHandler() {
    SetModalIsOpen(true);
  }

  function closeModalHandler() {
      SetModalIsOpen(false);
  }
  function deleteTodo()
  {
    SetModalIsOpen(false);
      props.onConfirmApp();
  }


  return (
    <div className="card">
      <h2>{props.title}</h2>
      <div className="actions">
        <button className="btn" onClick={deleteHandler} >
          Delete
        </button>
      </div>
      {modalIsOpen && <Modal onCancel={closeModalHandler} 
      
      onConfirm={deleteTodo } />}
      {/* this is modal */}
      {modalIsOpen && <Backdrop onCancel={closeModalHandler}/>}
      {/* this is just bg -gray */}
    </div>
  );
}

export default Todo;
