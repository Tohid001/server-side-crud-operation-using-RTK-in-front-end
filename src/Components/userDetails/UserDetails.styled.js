import styled from "styled-components";
import { CardContainer } from "../userCard/UserCard.styled";

export const UserContainer = styled.div`
  display: grid;
  min-height: 100vh;
  place-items: center;
  padding: 2rem;
  color: white;
`;

export const InfoContainer = styled(CardContainer)`
  display: block;
  padding: 1em;
  text-align: start;
`;

export const Row = styled.div`
  color: white;
  display: flex;
  flex-direction: column; //responsive
  gap: 0.5rem; //responsive;
  padding: 1.1rem; //responsive
  align-items: stretch; //responsive
  & div {
    &:nth-child(1) {
      font-weight: bold;
      text-transform: uppercase;
      color: #ab79d6;
      font-size: 1.2rem;
    }
  }
  .mainRow {
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
  }
`;

export const IconContainer = styled.div`
  margin-left: auto;
  background: rgba(212, 208, 207, 0.5);
  padding: 0.5em;
  display: flex;
  gap: 10px;
  & span {
    &:nth-child(1) {
      color: ${({ isEdit }) => (isEdit ? "rgba(255, 47, 0, 0.5)" : "null")};
      &:hover {
        color: ${({ isEdit }) => (isEdit ? "red" : "null")};
      }
    }
    &:nth-child(2) {
      &:hover {
        color: ${({ isEdit }) => (isEdit ? "rgba(0, 255, 0)" : "null")};
      }
    }
  }
`;
