import React from "react";
import { useParams } from "react-router-dom";
import { UserContainer, InfoContainer } from "./UserDetails.styled";
import {
  SelectInputContainer,
  TextInputContainer,
} from "../Form/Form.styled.js";
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
            return (
              <TextInputContainer>
                <TextInput {...options} placeholder="john doe." />
              </TextInputContainer>
            );
          }}
        </Row>

        <Row id={id} initialState={{ email }} value={email} title="E-mail">
          {(options) => {
            return (
              <TextInputContainer>
                <TextInput {...options} placeholder="john.doe@gmail.com" />
              </TextInputContainer>
            );
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
            return (
              <SelectInputContainer>
                <SelectInput {...options} options={countryData} />
              </SelectInputContainer>
            );
          }}
        </Row>

        <Row
          id={id}
          initialState={{ jobTitle }}
          value={jobTitle}
          title="Job Title"
        >
          {(options) => {
            return (
              <TextInputContainer>
                <TextInput {...options} placeholder="web developer" />
              </TextInputContainer>
            );
          }}
        </Row>

        <Row id={id} initialState={{ address }} value={address} title="Address">
          {(options) => {
            return (
              <TextInputContainer>
                <TextInput
                  {...options}
                  name="address"
                  placeholder="69 street, J.F.K area"
                />
              </TextInputContainer>
            );
          }}
        </Row>

        <Row id={id} initialState={{ phone }} value={phone} title="Phone">
          {(options) => {
            return (
              <TextInputContainer>
                <TextInput
                  {...options}
                  name="phone"
                  placeholder="+903648752541"
                />
              </TextInputContainer>
            );
          }}
        </Row>
      </InfoContainer>
    </UserContainer>
  );
}

export default UsersDetails;
