import styled from "styled-components";

export const FormContainer = styled.form`
  border-radius: 5px;
  position: relative;
  background: black;
  padding: 0.8rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  &:before {
    content: "";
    position: absolute;
    inset: 0;
    z-index: -1;
    background-color: rgba(176, 66, 245);
    border-radius: 5px;
    margin: -2px;
  }
`;

export const TextInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  & label {
    font-weight: bold;
    font-size: 1.2rem;
    color: #ab79d6;
  }

  & input {
    all: unset;
    display: block;
    border: 1.5px solid rgba(166, 5, 152);
    background-color: rgba(184, 138, 180);
    padding: 7px;
    border-radius: 5px;
    color: black;
  }
`;

export const RadioInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  & p {
    font-weight: bold;
    font-size: 1.2rem;
    color: #ab79d6;
  }
  .singleRadio {
    display: flex;
    align-items: center;
    gap: 10px;
    &:nth-child(1) {
      margin-bottom: 5px;
    }
    &:nth-child(2) {
      margin-bottom: 5px;
    }
  }
`;

export const SelectInputContainer = styled(TextInputContainer)`
  & select {
    /* all: unset; */
    display: block;
    border: 1.5px solid rgba(166, 5, 152);
    background-color: rgba(184, 138, 180);
    padding: 7px;
    border-radius: 5px;
    color: black;
  }
`;

export const ButtonContainer = styled.div`
  & button {
    &:nth-child(1) {
    }
    &:nth-child(2) {
    }
  }
`;
