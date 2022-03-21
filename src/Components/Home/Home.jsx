import React, { useCallback, useState, useEffect, useContext } from "react";
import { api } from "../../api.js";
import { UserCard } from "../index";
import { UserContext } from "../../Contexts/usersContext";
import { UsersContainer } from "./Home.styled";

function Home() {
  console.log("Home rendered");
  const [users, dispatch] = useContext(UserContext);
  // console.log("users", users);

  //   const deleteHandler = useCallback((id) => {
  //     setTodos((prev) => {
  //       const filteredTodos = prev.filter((todo, index) => todo.id !== id);
  //       return filteredTodos;
  //     });
  //   }, []);

  //   const addTodoHandler = useCallback((newTodo) => {
  //     setTodos((prev) => [...prev, newTodo]);
  //   }, []);

  useEffect(() => {
    api.get(dispatch);
  }, []);
  return (
    <>
      <UsersContainer>
        {users.map((user, index) => {
          return <UserCard key={index} user={user} userNo={index} />;
        })}
      </UsersContainer>
    </>
  );
}

export default Home;
