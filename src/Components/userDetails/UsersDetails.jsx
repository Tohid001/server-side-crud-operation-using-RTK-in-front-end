import React from "react";
import { useParams } from "react-router-dom";
import { UserContainer, InfoContainer } from "./UserDetails.styled";
import Row from "./RowInfo.jsx";
import { TextInput, RadioInput, SelectInput } from "../index.js";
import { countryData } from "../../constants";

import { useDispatch, useSelector } from "react-redux";
import { selectors } from "../../features/users/usersSlice.js";

function UsersDetails() {
  const { userId } = useParams();
  console.log("userDetails rendered");

  const currentUser = useSelector((state) =>
    selectors.selectById(state, userId)
  );

  const { id, name, email, gender, address, phone, country, avatar, jobTitle } =
    currentUser;

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
            return <TextInput {...options} placeholder="john.doe@gmail.com" />;
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
              <TextInput
                {...options}
                name="address"
                placeholder="69 street, J.F.K area"
              />
            );
          }}
        </Row>

        <Row id={id} initialState={{ phone }} value={phone} title="Phone">
          {(options) => {
            return (
              <TextInput
                {...options}
                name="phone"
                placeholder="+903648752541"
              />
            );
          }}
        </Row>
      </InfoContainer>
    </UserContainer>
  );
}

export default UsersDetails;
