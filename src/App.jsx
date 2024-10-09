import Header from "./component/Header";
import "./App.css";
import { useState } from "react";
import TodoItems from "./component/TodoItems";
import AddTodo from "./component/AddTodo";
import WelcomeMessage from "./component/WelcomeMessage";

function App() {
  const [todoItems, setTodoItems] = useState([]);

  // const handleNewitem = (itemName, ItemDate) => {
  //   const newTodoItems = [...todoItems, { name: itemName, dueDate: ItemDate }];
  //   setTodoItems(newTodoItems);
  // };

  const handleNewitem = (itemName, itemDate) => {
    // setTodoItems((currentValue) => {
    //   const newTodoItems = [
    //     ...currentValue,
    //     { name: itemName, dueDate: itemDate },
    //   ];
    //   return newTodoItems;
    // });

    setTodoItems((currentValue) => [
      ...currentValue,
      { name: itemName, dueDate: itemDate },
    ]);
  };

  const handleOnDelete = (todoItemName) => {
    const newTodoItem = todoItems.filter((item) => item.name != todoItemName);
    setTodoItems(newTodoItem);
  };

  return (
    <center className="todo-container">
      <Header />
      <AddTodo onNewItem={handleNewitem} />
      {todoItems.length <= 0 && <WelcomeMessage />}
      <TodoItems todoItem={todoItems} onDeleteClick={handleOnDelete} />
    </center>
  );
}

export default App;
