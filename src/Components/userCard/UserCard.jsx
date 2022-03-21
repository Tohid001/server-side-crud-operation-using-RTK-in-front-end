import React from "react";
import {
  CardContainer,
  CardItem,
  SecondaryCardContainer,
  HoveringItem,
} from "./UserCard.styled";

function UserCard({ user, userNo }) {
  console.log("userCard rendered", userNo);
  const { id, name, email, gender, address, phone, country, avatar, jobTitle } =
    user;
  // console.log("userCard rendered", user);
  // console.log("user", user.name);
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
      <HoveringItem />
    </CardContainer>
  );
}

export default UserCard;
