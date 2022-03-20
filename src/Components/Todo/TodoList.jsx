import React from "react";

import "./todo.css";

function Todo({ todo, deleteHandler }) {
  return (
    <div className="row">
      <div className="column">
        <h4>ID</h4>
        <div>{todo.id}</div>
      </div>
      <div className="column">
        <h4>Date</h4>
        <div>{todo.date}</div>
      </div>
      <div className="column">
        <h4>Todo</h4>
        <div>{todo.name}</div>
      </div>
      <div className="column">
        <h4>comment</h4>
        <div>{todo.comment}</div>
      </div>
      <div id="button">
        <button
          onClick={() => {
            deleteHandler(todo.id);
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default React.memo(Todo);

{
  /* <div className="Date item">
        <label>Date: </label>
        <input type="date" name="date" value={date} onChange={handleChange} />
      </div>
      <div className="name item">
        <label>Todo name:</label>
        <input type="text" name="name" value={name} onChange={handleChange} />
      </div>
      <div className="comment item">
        <label>Comment:</label>
        <input
          type="text"
          name="comment"
          value={comment}
          onChange={handleChange}
        />
      </div> */
}
