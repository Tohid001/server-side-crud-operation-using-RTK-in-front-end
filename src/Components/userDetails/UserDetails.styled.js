import styled from "styled-components";
import { CardContainer } from "../userCard/UserCard.styled";

export const UserContainer = styled.div`
  display: grid;
  min-height: 100vh;
  place-items: center;
  @media (max-width: 768px) {
    padding: 1.5em;
  }
  padding: 2em;
  color: white;
`;

export const InfoContainer = styled(CardContainer)`
  display: block;
  @media (max-width: 768px) {
    padding: 0.5em;
  }
  padding: 1.5em;
  text-align: start;
`;

export const Row = styled.div`
  color: white;
  display: flex;
  flex-direction: column; //responsive
  gap: 0.5rem; //responsive;
  padding: 1rem; //responsive
  align-items: stretch; //responsive
  .title {
    font-weight: bold;
    text-transform: uppercase;
    color: #ab79d6;
    font-size: 1.2rem;
  }
`;

export const SubRow = styled.div`
  position: relative;
  background: rgba(212, 208, 207, 0.2);
  padding: 0.8em;
  display: flex;
  gap: 1rem;
  align-items: center;
  & p {
  }
  & span {
    margin-left: auto;
    cursor: pointer;
  }

  &:before {
    content: "loading...";
    position: absolute;
    z-index: 10;
    display: ${({ isUpdate }) => (isUpdate ? "grid" : "none")};
    color: black;
    font-weight: bold;
    inset: 0;

    place-items: center;
    font-size: 1.2rem;
  }
  &:after {
    content: "";
    position: absolute;
    inset: 0;
    z-index: 9;
    background: rgba(212, 208, 207, 0.8);
    display: ${({ isUpdate }) => (isUpdate ? "block" : "none")};
  }
`;

export const IconContainer = styled.div`
  margin-left: auto;
  background: rgba(212, 208, 207, 0.5);
  padding: 0.5em;
  display: flex;
  gap: 10px;
  /* & div {
    background: ${({ isAbled }) => (!isAbled ? "rgba(115, 118, 122)" : "null")};
  } */
  & button {
    all: unset;
    &:nth-child(1) {
      color: ${({ isEdit }) => (isEdit ? "rgba(255, 47, 0, 0.5)" : "null")};
      &:hover {
        color: ${({ isEdit }) => (isEdit ? "red" : "null")};
      }
    }
    &:nth-child(2) {
      color: ${({ isAbled, isEdit }) =>
        isEdit && !isAbled ? "rgba(101, 103, 105)" : "null"};
      &:hover {
        color: ${({ isEdit, isAbled }) =>
          isEdit && !isAbled ? "null" : "rgba(0, 255, 0)"};
      }
    }
  }
`;

export const ShowModal = styled.div`
  position: absolute;
  inset: 0;
  display: grid;
  place-items: center;
  background-color: ${({ isError }) =>
    !isError ? "rgba(74, 255, 33, 0.9)" : "rgba(242, 57, 24)"};
  color: black;
  font-weight: bold;
  z-index: 20;
`;

// export const Update=styled.div`

// `
