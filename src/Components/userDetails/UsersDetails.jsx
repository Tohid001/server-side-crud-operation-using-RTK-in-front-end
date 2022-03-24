import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { UserContext } from "../../Contexts/usersContext";
import { UserContainer, InfoContainer } from "./UserDetails.styled";
import Row from "./RowInfo.jsx";
import { TextInput, RadioInput, SelectInput } from "../index.js";
import { countryData } from "../../constants";

function UsersDetails() {
  console.log("userDetails rendered");

  const { userId } = useParams();
  console.log("userDetails", userId); ///

  const [users, dispatch] = useContext(UserContext);

  console.log("users", users);

  const currentUserIndex =
    users.length > 0
      ? users.findIndex((user, index) => user.id === userId)
      : null;
  const currentUser = users[currentUserIndex];
  const { id, name, email, gender, address, phone, country, avatar, jobTitle } =
    currentUser;

  console.log("id", id); ///

  useEffect(() => {}, []);

  return (
    <UserContainer>
      <InfoContainer>
        <Row id={id} initialState={{ name }} value={name} title="Name">
          {(options) => {
            return <TextInput {...options} placeholder="john doe." />;
          }}
        </Row>

        <Row id={id} initialState={{ email }} value={email} title="E-mail">
          {(options) => {
            return <TextInput {...options} placeholder="asasa@gmail.com" />;
          }}
        </Row>

        <Row id={id} initialState={{ gender }} value={gender} title="Gender">
          {(options) => {
            return ["male", "female", "others"].map((item, index) => (
              <RadioInput {...options} key={index} value={item} label={item} />
            ));
          }}
        </Row>

        <Row id={id} initialState={{ country }} value={country} title="Country">
          {(options) => {
            return <SelectInput {...options} options={countryData} />;
          }}
        </Row>

        <Row
          id={id}
          initialState={{ jobTitle }}
          value={jobTitle}
          title="Job Title"
        >
          {(options) => {
            return <TextInput {...options} placeholder="web developer" />;
          }}
        </Row>

        <Row id={id} initialState={{ address }} value={address} title="Address">
          {(options) => {
            return (
              <TextInput {...options} name="address" placeholder="asasas" />
            );
          }}
        </Row>

        <Row id={id} initialState={{ phone }} value={phone} title="Phone">
          {(options) => {
            return <TextInput {...options} name="phone" placeholder="123" />;
          }}
        </Row>
      </InfoContainer>
    </UserContainer>
  );
}

export default UsersDetails;
