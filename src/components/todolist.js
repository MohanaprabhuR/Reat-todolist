import { Todo } from "./todo";

export const TodoList = ({ messageList, deleteTodo }) => {
  return (
    <ol id="todolist">
      {messageList &&
        messageList
          .slice(0)
          .reverse()
          .map((message, index) => (
            <Todo message={message} deleteTodo={deleteTodo} key={index} />
          ))}
    </ol>
  );
};
