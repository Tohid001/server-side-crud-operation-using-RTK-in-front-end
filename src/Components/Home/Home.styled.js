import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const UsersContainer = styled.div`
  display: grid;
  position: relative;
  grid-template-columns: repeat(auto-fill, minmax(min(100%, 25ch), 1fr));
  /* min-height: 100vh; */
  padding: 2rem;
  margin: 2rem;
  grid-gap: 1.5rem;
`;

export const AddUserButton = styled(NavLink)`
  all: unset;
  cursor: pointer;
  position: fixed;
  right: 20px;
  bottom: 50px;
  display: grid;
  place-items: center;
  width: 2rem;
  aspect-ratio: 1;
  border-radius: 100%;
  padding: 1em;
  font-size: 1rem;
  background: rgba(237, 218, 2, 0.75);
  color: black;
  &:hover {
    transform: scale(1.1);
  }
  z-index: 100;
`;
