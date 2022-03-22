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
  display: ${({ test }) =>
    test === "id" || test === "avatar" ? "none" : "flex"};
  flex-direction: column; //responsive
  gap: 0.5rem; //responsive;
  padding: 1.1rem; //responsive
  align-items: stretch; //responsive
  & div {
    &:nth-child(1) {
      font-weight: bold;
      text-transform: uppercase;
      /* color: rgba(255, 255, 255, 0.7); */
      color: #ab79d6;
      font-size: 1.2rem;
      /* background: pink; */
    }
    &:nth-child(2) {
      background: rgba(212, 208, 207, 0.2);
      padding: 0.8em;
      display: flex;
      gap: 1rem;
      & p {
        display: block; //
      }
      & span {
        margin-left: auto;
        cursor: pointer;
        &: hover {
          color: red;
        }
      }
      & input {
        flex-basis: 100%;
        /* all: unset; */
      }
    }
  }
`;
