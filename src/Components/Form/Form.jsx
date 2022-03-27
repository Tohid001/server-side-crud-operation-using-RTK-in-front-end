import React from "react";
import useForm from "../../Hooks/useForm.js";
import { v4 } from "uuid";
import { TextInput, SelectInput, RadioInput } from "../index.js";
import { useNavigate } from "react-router-dom";
import {
  FormContainer,
  TextInputContainer,
  RadioInputContainer,
  SelectInputContainer,
  ButtonContainer,
  Modal,
} from "./Form.styled.js";
import { countryData } from "../../constants/index.js";

function Form({ submitHandler, initialStateObj, activitiesObj }) {
  const navigate = useNavigate();
  const { initialState, setInitialState } = initialStateObj;
  const {
    setActivities,
    activities: { loading, isError, showModal },
  } = activitiesObj;

  const [formstates, setFormstates, onChangeHandler, resetHandler] =
    useForm(initialState);

  const { name, email, gender, address, phone, country, jobTitle } = formstates;

  console.log(country);

  return (
    <FormContainer
      onSubmit={(e) => {
        e.preventDefault();
        setActivities((prev) => {
          return {
            ...prev,
            showModal: !prev.showModal,
            loading: !prev.loading,
          };
        });
        submitHandler(e, { ...formstates, id: v4() });
      }}
    >
      {showModal && (
        <Modal isError={isError} loading={loading}>
          <span>
            {loading && !isError
              ? "loading..."
              : !loading && isError
              ? "Failed to create new user!"
              : !loading && !isError
              ? "New user created successfully!"
              : null}
          </span>
          {!loading && !isError && (
            <button
              onClick={() => {
                setActivities((prev) => {
                  return { ...prev, showModal: !prev.showModal };
                });
                navigate("/", { replace: true });
              }}
            >
              Go to home page
            </button>
          )}
        </Modal>
      )}
      <TextInputContainer>
        <TextInput
          name="name"
          state={name}
          onChangeHandler={onChangeHandler}
          label="Name"
          placeholder="John doe."
          required={true}
        />
      </TextInputContainer>
      <TextInputContainer>
        <TextInput
          required={true}
          name="email"
          state={email}
          onChangeHandler={onChangeHandler}
          label="E-mail"
          placeholder="john.doe@gmail.com"
        />
      </TextInputContainer>

      <RadioInputContainer>
        <p>Gender</p>
        <div>
          {["male", "female", "others"].map((item, index) => (
            <div className="singleRadio" key={index}>
              <RadioInput
                required={true}
                name="gender"
                state={gender}
                value={item}
                onChangeHandler={onChangeHandler}
                label={item}
              />
            </div>
          ))}
        </div>
      </RadioInputContainer>

      <SelectInputContainer>
        <SelectInput
          required={true}
          name="country"
          state={country}
          onChangeHandler={onChangeHandler}
          label="Country"
          options={countryData}
        />
      </SelectInputContainer>

      <TextInputContainer>
        <TextInput
          required={true}
          name="address"
          state={address}
          onChangeHandler={onChangeHandler}
          label="Address"
          placeholder="69 street, J.F.K area"
        />
      </TextInputContainer>

      <TextInputContainer>
        <TextInput
          required={true}
          name="jobTitle"
          state={jobTitle}
          onChangeHandler={onChangeHandler}
          label="Job Title"
          placeholder="Web developer"
        />
      </TextInputContainer>

      <TextInputContainer>
        <TextInput
          required={true}
          name="phone"
          state={phone}
          onChangeHandler={onChangeHandler}
          label="Phone"
          placeholder="+987451254785"
        />
      </TextInputContainer>
      <ButtonContainer
        isResetDisable={
          Object.values(formstates).filter((value) => value.length !== 0)
            .length !== 0
        }
        disableSubmit={false}
      >
        <button type="submit">Create User</button>
        <button
          disabled={
            Object.values(formstates).filter((value) => value.length !== 0)
              .length == 0
          }
          onClick={resetHandler}
        >
          Reset
        </button>
      </ButtonContainer>
    </FormContainer>
  );
}

export default Form;
