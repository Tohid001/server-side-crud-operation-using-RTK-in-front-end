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
  display: flex;
  gap: 10px;
  & button {
    all: unset;
    cursor: pointer;
    border-radius: 5px;
    padding: 10px;
    font-weight: bold;
    color: black;
    &:hover {
      transform: translateY(-3.5px) scale(1.05);
    }
    &:nth-child(1) {
      background: rgba(2, 247, 84);
    }
    &:nth-child(2) {
      background: ${({ isResetDisable }) =>
        isResetDisable ? "rgba(109, 221, 227)" : "rgba(168, 173, 170)"};
    }
  }
`;

export const Modal = styled.div`
  position: absolute;
  inset: 0;
  /* color: ${({ isError }) => (isError ? "red" : "black")}; */
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 10px;
  background-color: ${({ isError, loading }) =>
    !isError && !loading
      ? "rgba(63, 209, 82)"
      : isError && !loading
      ? "rgba(240, 81, 70)"
      : !isError && loading
      ? "rgba(155, 147, 237)"
      : null};

  & button {
    all: unset;
    padding: 1rem;
    background: rgba(184, 242, 203);
    color: black;
    cursor: pointer;
    &:hover {
      transform: translateY(5px) scale(1.1);
    }
  }
`;
