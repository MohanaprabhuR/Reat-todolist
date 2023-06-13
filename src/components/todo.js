import React, { useState } from "react";

export const Todo = ({ message, deleteTodo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedMessage, setEditedMessage] = useState(message);

  const handleSubmit = () => {
    deleteTodo(message);
  };

  const handleSave = () => {
    deleteTodo(message);
    deleteTodo(editedMessage);
    setIsEditing(false);
  };

  return (
    <li id="todo">
      {isEditing ? (
        <input
          type="text"
          value={editedMessage}
          onChange={(event) => setEditedMessage(event.target.value)}
        />
      ) : (
        <span id="todo__label ">{message + "  "}</span>
      )}
      <div>
        {isEditing ? (
          <button className="todo_save todo__delete" onClick={handleSave}>
            Save
          </button>
        ) : (
          <button
            className="todo_edit todo_save todo__delete "
            onClick={() => setIsEditing(true)}
          >
            Edit
          </button>
        )}
        <button className="todo__delete" onClick={handleSubmit}>
          Delete
        </button>
      </div>
    </li>
  );
};
