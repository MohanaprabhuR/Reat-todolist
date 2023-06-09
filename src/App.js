import "./App.css";
import { useState } from "react";
import { TodoHeader } from "./components/todoheader";
import { TodoFooter } from "./components/todofooter";
import { TodoForm } from "./components/todoform";
import { TodoList } from "./components/todolist";

function App() {
  const [messageList, setMessageList] = useState(["Milk", "Sugar", "Butter"]);

  const addTodo = (message) => {
    setMessageList([...messageList, message]);
  };

  const deleteTodo = (message) => {
    let deleteMessageIndex = messageList.indexOf(message);
    setMessageList([
      ...messageList.slice(0, deleteMessageIndex),
      ...messageList.slice(deleteMessageIndex + 1),
    ]);
  };
  return (
    <>
      <TodoHeader />
      <TodoForm addTodo={addTodo} />
      <TodoList messageList={messageList} deleteTodo={deleteTodo} />
      <TodoFooter />
    </>
  );
}

export default App;
