import React, { useState } from "react";
import { Container } from "./AddUser.styled.js";
import { Form } from "../index.js";

// import { usersUrl } from "../../features/users/api";
import axios from "axios";
import { API_URL } from "../../config.js";

function AddUser() {
  const [activities, setActivities] = useState({
    loading: false,
    showModal: false,
    isError: false,
  });

  const [initialState, setInitialState] = useState({
    name: "",
    email: "",
    gender: "",
    address: "",
    phone: "",
    country: "",
    jobTitle: "",
  });

  const submitHandler = async (e, newUser) => {
    try {
      const response = await axios.post(
        API_URL,
        newUser
      );
      console.log("res", response);
      setActivities((prev) => {
        return { ...prev, loading: !prev.loading };
      });

      // setTimeout(() => {
      //   setActivities((prev) => {
      //     return { ...prev, showModal: !prev.showModal };
      //   });
      // }, 1000);
    } catch (error) {
      setActivities((prev) => {
        return { ...prev, loading: !prev.loading, isError: !prev.isError };
      });
      setTimeout(() => {
        setActivities((prev) => {
          return {
            ...prev,
            showModal: !prev.showModal,
            isError: !prev.isError,
          };
        });
      }, 1500);
    }
  };

  return (
    <Container>
      <Form
        activitiesObj={{ activities, setActivities }}
        submitHandler={submitHandler}
        initialStateObj={{ initialState, setInitialState }}
      />
    </Container>
  );
}

export default AddUser;
