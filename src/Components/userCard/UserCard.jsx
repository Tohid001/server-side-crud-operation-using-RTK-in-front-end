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

function UserCard({ user, userNo, deleteHandler }) {
  console.log("userCard rendered", userNo);
  const { id, name, email, gender, address, phone, country, avatar, jobTitle } =
    user;

  return (
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
              deleteHandler(id);
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
  );
}

export default UserCard;
