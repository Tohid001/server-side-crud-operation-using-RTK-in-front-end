import styled from "styled-components";

export const ModalContainer = styled.div`
  z-index: 1000;
  position: fixed;
  left: 50%;
  top: 50%;
  /* right: 25%; */
  /* bottom: 25%; */
  padding: 1.5em;
  color: black;
  background-color: ${({ error, loading, showModal }) => {
    return error ? "red" : "green";
  }};
`;
