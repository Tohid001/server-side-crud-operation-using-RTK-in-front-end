import styled from "styled-components";

export const UsersContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(min(100%, 25ch), 1fr));
  min-height: 100vh;

  padding: 2rem;
  margin: 2rem;
  grid-gap: 1.5rem;
`;
