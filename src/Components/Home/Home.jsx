import React, { useEffect } from "react";
import { api } from "../../api.js";
import { UserCard } from "../index";
import { UsersContainer } from "./Home.styled";

import { useSelector, useDispatch } from "react-redux";
import { fetchUsersThunk, selectors } from "../../features/users/usersSlice.js";

function Home() {
  console.log("Home rendered");

  const users = useSelector(selectors.selectAll);
  const dispatch = useDispatch();
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
    dispatch(fetchUsersThunk())
      .unwrap()
      .then((originalPromiseResult) => {
        // handle result here
      })
      .catch((rejectedValueOrSerializedError) => {
        // handle error here
      });
  }, []);

  return (
    <>
      <UsersContainer>
        {users.map((user, index) => {
          return <UserCard key={index} user={user} userNo={index + 1} />;
        })}
      </UsersContainer>
    </>
  );
}

export default Home;
