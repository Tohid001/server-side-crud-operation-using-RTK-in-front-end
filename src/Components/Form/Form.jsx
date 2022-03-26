import React from "react";
import useForm from "../../Hooks/useForm.js";
import { TextInput, SelectInput, RadioInput } from "../index.js";
import {
  FormContainer,
  TextInputContainer,
  RadioInputContainer,
  SelectInputContainer,
} from "./Form.styled.js";
import { countryData } from "../../constants/index.js";

function Form() {
  const [formstates, setFormstates, onChangeHandler, resetHandler] = useForm({
    name: "",
    email: "",
    gender: "",
    address: "",
    phone: "",
    country: "",
    jobTitle: "",
  });

  const { name, email, gender, address, phone, country, jobTitle } = formstates;

  console.log(country);

  return (
    <FormContainer>
      <TextInputContainer>
        <TextInput
          name="name"
          state={name}
          onChangeHandler={onChangeHandler}
          label="Name"
          placeholder="John doe."
        />
      </TextInputContainer>
      <TextInputContainer>
        <TextInput
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
          name="country"
          state={country}
          onChangeHandler={onChangeHandler}
          label="Country"
          options={countryData}
        />
      </SelectInputContainer>

      <TextInputContainer>
        <TextInput
          name="address"
          state={address}
          onChangeHandler={onChangeHandler}
          label="Address"
          placeholder="69 street, J.F.K area"
        />
      </TextInputContainer>

      <TextInputContainer>
        <TextInput
          name="jobTitle"
          state={jobTitle}
          onChangeHandler={onChangeHandler}
          label="Job Title"
          placeholder="Web developer"
        />
      </TextInputContainer>

      <TextInputContainer>
        <TextInput
          name="phone"
          state={phone}
          onChangeHandler={onChangeHandler}
          label="Phone"
          placeholder="+987451254785"
        />
      </TextInputContainer>
    </FormContainer>
  );
}

export default Form;
