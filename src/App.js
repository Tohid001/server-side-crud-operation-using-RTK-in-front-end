import React, { useState, useCallback, useEffect } from "react";
import { GlobalReset } from "./Global.styled.js";
import { Form, TodoList, Home } from "./Components";
import { Routes, Route } from "react-router-dom";

function App() {
  console.log("App rendered");
  return (
    <>
      <GlobalReset />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      {/* <Form addTodoHandler={addTodoHandler} />
      <div className="TodoContainer">
        {todos.map((todo, index) => {
          return (
            <TodoList todo={todo} key={index} deleteHandler={deleteHandler} />
          );
        })}
      </div> */}
    </>
  );
}

export default App;
