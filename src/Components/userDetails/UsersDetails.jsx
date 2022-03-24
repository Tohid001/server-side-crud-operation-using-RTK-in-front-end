import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { UserContext } from "../../Contexts/usersContext";
import { UserContainer, InfoContainer } from "./UserDetails.styled";
import useForm from "../../Hooks/useForm.js";
import Row from "./RowInfo.jsx";
import { countryData } from "../../constants";
import { TextInput, RadioInput, SelectInput } from "../index.js";

function UsersDetails() {
  const { userId } = useParams();
  const [users, dispatch] = useContext(UserContext);
  const currentUserIndex = users?.findIndex(
    (user, index) => user.id === userId
  );

  const currentUser = users[currentUserIndex];
  const { id, name, email, gender, address, phone, country, avatar, jobTitle } =
    currentUser;
  const [formstates, setFormstates, onChangeHandler, resetHandler] = useForm({
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
        <Row value={name} title="Name" resetHandler={resetHandler}>
          <TextInput
            value={formstates.name}
            name="name"
            onChangeHandler={onChangeHandler}
            isForm={false}
            placeholder="John Williams"
          />
        </Row>
        <Row value={email} title="E-mail" resetHandler={resetHandler}>
          <TextInput
            value={formstates.email}
            name="email"
            onChangeHandler={onChangeHandler}
            isForm={false}
            placeholder="xy@gmail.com"
          />
        </Row>

        <Row value={gender} title="Gender" resetHandler={resetHandler}>
          {["male", "female", "others"].map((item, index) => (
            <RadioInput
              key={index}
              value={item}
              state={formstates.gender}
              name="gender"
              onChangeHandler={onChangeHandler}
              label={item}
            />
          ))}
        </Row>
        <Row value={country} title="Country" resetHandler={resetHandler}>
          <SelectInput
            value={formstates.country}
            name="country"
            onChangeHandler={onChangeHandler}
            isForm={false}
            placeholder="Select country"
            options={countryData}
          />
        </Row>
        <Row value={jobTitle} title="Job Title" resetHandler={resetHandler}>
          <TextInput
            value={formstates.jobTitle}
            name="jobTitle"
            onChangeHandler={onChangeHandler}
            isForm={false}
            placeholder="web developer"
          />
        </Row>
        <Row value={address} title="Address" resetHandler={resetHandler}>
          <TextInput
            value={formstates.address}
            name="address"
            onChangeHandler={onChangeHandler}
            isForm={false}
            placeholder="69 street, 46 road"
          />
        </Row>
        <Row value={phone} title="Phone" resetHandler={resetHandler}>
          <TextInput
            value={formstates.phone}
            name="phone"
            onChangeHandler={onChangeHandler}
            isForm={false}
            placeholder="+125425879654"
          />
        </Row>
      </InfoContainer>
    </UserContainer>
  );
}

export default UsersDetails;
