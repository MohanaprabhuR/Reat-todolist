import React from "react";
import { Todo } from "./todo";

export const TodoList = ({ messageList, deleteTodo }) => {
  return (
    <ol id="todolist">
      {messageList && messageList.length > 0 ? (
        messageList
          .slice(0)
          .reverse()
          .map((message, index) => (
            <Todo message={message} deleteTodo={deleteTodo} key={index} />
          ))
      ) : (
        <li className="no-record">No records found</li>
      )}
    </ol>
  );
};
