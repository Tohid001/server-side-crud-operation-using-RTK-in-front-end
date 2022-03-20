import React, { useState } from "react";
import "./form.css";
import { v4 as uuidv4 } from "uuid";

function Form({ addTodoHandler }) {
  const [formValues, setForm] = useState({
    date: "",
    name: "",
    comment: "",
  });

  const { name, comment, date } = formValues;

  const handleChange = (e) => {
    setForm({ ...formValues, [e.target.name]: e.target.value });
  };

  return (
    <div className="form">
      <div className="Date item">
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
      </div>
      <div className="button">
        <button
          onClick={() => {
            const newTodo = {
              id: uuidv4(),
              ...formValues,
            };
            addTodoHandler(newTodo);
            setForm({
              date: "",
              name: "",
              comment: "",
            });
          }}
        >
          Add todo
        </button>
      </div>
    </div>
  );
}

export default Form;
