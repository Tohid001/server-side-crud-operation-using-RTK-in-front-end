import React, { useEffect, useCallback } from "react";
import { UserCard } from "../index";
import { UsersContainer, AddUserButton } from "./Home.styled";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchUsersThunk,
  selectors,
  deleteUserThunk,
} from "../../features/users/usersSlice.js";
import useModal from "../../Hooks/useModal.js";
import { Modal } from "../index.js";

import { IoIosAdd } from "react-icons/io";

function Home() {
  console.log("Home rendered");
  const [
    loading,
    showModal,
    error,
    setActivities,
    loadingHandler,
    modalHandler,
    errorHandler,
    rejectHandler,
    successHandler,
  ] = useModal();
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
        modalHandler();
        rejectHandler(rejectedValueOrSerializedError.errorMessage);
      });
  }, []);

  const deleteHandler = useCallback((id) => {
    return dispatch(deleteUserThunk(id));
  }, []);

  return (
    <>
      {showModal && <Modal error={error} />}
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
