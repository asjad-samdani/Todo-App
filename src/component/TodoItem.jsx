import React from "react";
import { MdDeleteForever } from "react-icons/md";

function Todoitem({ todoName, todoDate, onDelete }) {
  return (
    <div className="container text-center todo-item">
      <div className="row">
        <div className="col-6 todo-item-name">{todoName}</div>
        <div className="col-4 todo-item-date">{todoDate}</div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-danger"
            onClick={() => onDelete(todoName, todoDate)}
          >
            <MdDeleteForever />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Todoitem;
