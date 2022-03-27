import React from "react";
import { AiFillEye } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import {
  CardContainer,
  CardItem,
  SecondaryCardContainer,
  HoveringItem,
  UserDetailsLink,
  DeleteUserLink,
  LinkContainer,
} from "./UserCard.styled";
import useModal from "../../Hooks/useModal.js";
import { Modal } from "../index.js";

function UserCard({ user, userNo, deleteHandler }) {
  console.log("userCard rendered", userNo);
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
  const { id, name, email, gender, address, phone, country, avatar, jobTitle } =
    user;

  return (
    <>
      {showModal && (
        <Modal
          name={name}
          id={id}
          loading={loading}
          error={error}
          showModal={showModal}
        />
      )}
      <CardContainer>
        <SecondaryCardContainer>
          <span className="number">{userNo}</span>
          <CardItem>{name}</CardItem>
          <CardItem>{jobTitle}</CardItem>
          <CardItem>
            from <span>{country}</span>
          </CardItem>
          <CardItem>{email}</CardItem>
        </SecondaryCardContainer>
        <HoveringItem>
          <LinkContainer>
            <UserDetailsLink to={`/user/${id}`}>
              <p> Show details</p>
              <span>
                <AiFillEye />
              </span>
            </UserDetailsLink>
          </LinkContainer>
          <LinkContainer>
            <DeleteUserLink
              as="div"
              onClick={() => {
                loadingHandler();
                deleteHandler(id)
                  .unwrap()
                  .then((originalPromiseResult) => {
                    // handle result here
                    successHandler();
                    setTimeout(() => {
                      modalHandler();
                    }, 1500);
                  })
                  .catch((rejectedValueOrSerializedError) => {
                    // handle error here

                    rejectHandler(rejectedValueOrSerializedError.errorMessage);
                    setTimeout(() => {
                      errorHandler();
                    }, 1500);
                  });
              }}
            >
              <p>Delete user</p>
              <span>
                <MdDelete />
              </span>
            </DeleteUserLink>
          </LinkContainer>
        </HoveringItem>
      </CardContainer>
    </>
  );
}

export default React.memo(UserCard);
