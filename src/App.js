import React, { useState, useCallback, useEffect } from "react";
import { GlobalReset } from "./Global.styled.js";
import { Form, TodoList } from "./Components";

function App() {
  const [todos, setTodos] = useState([]);

  const deleteHandler = useCallback((id) => {
    setTodos((prev) => {
      const filteredTodos = prev.filter((todo, index) => todo.id !== id);
      return filteredTodos;
    });
  }, []);

  const addTodoHandler = useCallback((newTodo) => {
    setTodos((prev) => [...prev, newTodo]);
  }, []);

  return (
    <>
      <GlobalReset />
      <Form addTodoHandler={addTodoHandler} />
      <div className="TodoContainer">
        {todos.map((todo, index) => {
          return (
            <TodoList todo={todo} key={index} deleteHandler={deleteHandler} />
          );
        })}
      </div>
    </>
  );
}

export default App;
