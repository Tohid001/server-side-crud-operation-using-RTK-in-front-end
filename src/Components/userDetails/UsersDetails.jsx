import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { UserContext } from "../../Contexts/usersContext";
import { UserContainer, InfoContainer } from "./UserDetails.styled";
import Row from "./RowInfo.jsx";
import { TextInput, RadioInput, SelectInput } from "../index.js";
import { countryData } from "../../constants";

function UsersDetails() {
  const { userId } = useParams();
  const [users, dispatch] = useContext(UserContext);

  const currentUserIndex = users?.findIndex(
    (user, index) => user.id === userId
  );
  const currentUser = users[currentUserIndex];
  const { id, name, email, gender, address, phone, country, avatar, jobTitle } =
    currentUser;

  return (
    <UserContainer>
      <InfoContainer>
        <Row initialState={{ name }} title="Name">
          {(options) => {
            return <TextInput {...options} name="name" />;
          }}
        </Row>
        <Row initialState={{ email }} title="E-mail">
          {(options) => {
            return <TextInput {...options} name="email" />;
          }}
        </Row>
        <Row initialState={{ gender }} title="Gender">
          {(options) => {
            return <RadioInput {...options} name="gender" />;
          }}
        </Row>
        <Row initialState={{ country }} title="Country">
          {(options) => {
            return (
              <SelectInput {...options} name="country" options={countryData} />
            );
          }}
        </Row>
        <Row initialState={{ jobTitle }} title="Job Title">
          {(options) => {
            return <TextInput {...options} name="jobTitle" />;
          }}
        </Row>
        <Row initialState={{ address }} title="Address">
          {(options) => {
            return <TextInput {...options} name="address" />;
          }}
        </Row>
        <Row initialState={{ phone }} title="Phone">
          {(options) => {
            return <TextInput {...options} name="phone" />;
          }}
        </Row>
      </InfoContainer>
    </UserContainer>
  );
}

export default UsersDetails;
