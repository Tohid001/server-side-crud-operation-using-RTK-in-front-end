import React, { useEffect, useState } from "react";
import { UserCard } from "../index";
import { UsersContainer, AddUserButton } from "./Home.styled";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchUsersThunk,
  selectors,
  deleteUserThunk,
} from "../../features/users/usersSlice.js";

import { IoIosAdd } from "react-icons/io";

function Home() {
  console.log("Home rendered");
  const users = useSelector(selectors.selectAll);
  const dispatch = useDispatch();

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

  const deleteHandler = (id) => {
    return dispatch(deleteUserThunk(id));
  };

  return (
    <>
      <UsersContainer>
        <AddUserButton to="/addUser">
          <IoIosAdd size="2rem" />
        </AddUserButton>
        {users.map((user, index) => {
          return (
            <UserCard
              key={index}
              user={user}
              userNo={index + 1}
              deleteHandler={deleteHandler}
            />
          );
        })}
      </UsersContainer>
    </>
  );
}

export default Home;
