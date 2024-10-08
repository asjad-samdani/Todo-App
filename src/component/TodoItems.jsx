import React from "react";
import Todoitem from "./Todoitem";

function TodoItems({ todoItem, onDeleteClick }) {
  return (
    <div className="items-container">
      {todoItem.map((item, index) => (
        <Todoitem
          key={index}
          todoName={item.name}
          todoDate={item.dueDate}
          onDelete={onDeleteClick}
        />
      ))}
    </div>
  );
}

export default TodoItems;
