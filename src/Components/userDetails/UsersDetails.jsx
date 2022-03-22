import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { UserContext } from "../../Contexts/usersContext";
import { UserContainer, InfoContainer } from "./UserDetails.styled";
import {} from "../userCard/UserCard.styled";
import Row from "./RowInfo.jsx";

function UsersDetails() {
  const { userId } = useParams();
  const [users, dispatch] = useContext(UserContext);

  const currentUserIndex = users?.findIndex(
    (user, index) => user.id === userId
  );

  // const { id, name, email, gender, address, phone, country, avatar, jobTitle } =
  //   users[currentUserIndex];
  const currentUser = users[currentUserIndex];

  return (
    <UserContainer>
      <InfoContainer>
        {Object.keys(currentUser).map((key, index) => (
          <Row key={index} oKey={key} test={key} currentUser={currentUser} />
        ))}
      </InfoContainer>
    </UserContainer>
  );
}

export default UsersDetails;
