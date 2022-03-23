import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { UserContext } from "../../Contexts/usersContext";
import { UserContainer, InfoContainer } from "./UserDetails.styled";
import useForm from "../../Hooks/useForm.js";
import Row from "./RowInfo.jsx";

function UsersDetails() {
  const { userId } = useParams();
  const [users, dispatch] = useContext(UserContext);
  const currentUserIndex = users?.findIndex(
    (user, index) => user.id === userId
  );

  const currentUser = users[currentUserIndex];
  const { id, name, email, gender, address, phone, country, avatar, jobTitle } =
    currentUser;
  const [value, setValue, onChange, reset] = useForm({
    name,
    email,
    gender,
    address,
    phone,
    country,
    jobTitle,
  });

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
