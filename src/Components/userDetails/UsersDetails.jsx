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
        <Row value={name} title="Name">
          <TextInput
            value={formstates.name}
            name="name"
            onChangeHandler={onChangeHandler}
            isForm={false}
            placeholder="John Williams"
          />
        </Row>
        <Row value={email} title="E-mail">
          <TextInput
            value={formstates.email}
            name="email"
            onChangeHandler={onChangeHandler}
            isForm={false}
            placeholder="xy@gmail.com"
          />
        </Row>
      </InfoContainer>
    </UserContainer>
  );
}

export default UsersDetails;
