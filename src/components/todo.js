export const Todo = ({ message, deleteTodo }) => {
  const handleSubmit = (event) => {
    deleteTodo(message);
  };
  return (
    <li id="todo">
      <span id="todo__label">{message + "  "}</span>
      <button id="todo__delete" onClick={handleSubmit}>
        Delete
      </button>
    </li>
  );
};
