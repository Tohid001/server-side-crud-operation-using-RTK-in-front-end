import styled from "styled-components";

export const ModalContainer = styled.div`
  /* z-index: 1000;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translateY(-50%) translateX(-50%); */
  padding: 1.5em;
  color: black;
  background-color: ${({ error, loading, showModal }) => {
    return loading
      ? "rgba(111, 184, 247)"
      : error
      ? "rgba(240, 97, 86)"
      : "rgba(0, 250, 75)";
  }};
`;

export const ModalWrapper = styled.div`
  z-index: 1000;
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  display: grid;
  place-items: center;
`;
