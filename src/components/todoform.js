import { useState } from "react";

export const TodoForm = ({ addTodo }) => {
  const [input, setInput] = useState("");

  const changeHandler = (event) => {
    setInput(event.target.value);
  };

  const submitHandler = () => {
    if (input.trim() !== "") {
      addTodo(input);
      setInput("");
    }
  };

  const keyPressHandler = (event) => {
    if (event.key === "Enter") {
      submitHandler();
    }
  };

  return (
    <div id="form">
      <input
        id="form__input"
        type="text"
        value={input}
        onChange={changeHandler}
        onKeyPress={keyPressHandler}
      />
      <button id="form__submit" onClick={submitHandler}>
        Add Todo
      </button>
    </div>
  );
};
