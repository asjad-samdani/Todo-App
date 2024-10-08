import React from "react";
import { useState } from "react";
import { IoMdAddCircle } from "react-icons/io";

function AddTodo({ onNewItem }) {
  const [todoName, setTodoName] = useState();
  const [todoDate, setTodoDate] = useState();

  const handleTodoName = (e) => {
    setTodoName(e.target.value);
  };
  const handleTodoDate = (e) => {
    setTodoDate(e.target.value);
  };
  const handleAddButtonClicked = () => {
    onNewItem(todoName, todoDate);
    setTodoName("");
    setTodoDate("");
  };

  return (
    <div className="container text-center input-container">
      <div className="row">
        <div className="col-6">
          <input
            type="text"
            value={todoName}
            placeholder="Enter Todo here"
            onChange={handleTodoName}
          />
        </div>

        <div className="col-4">
          <input type="date" value={todoDate} onChange={handleTodoDate} />
        </div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-success"
            onClick={handleAddButtonClicked}
          >
            <IoMdAddCircle />
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;
