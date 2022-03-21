import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  color: #c5c5ce;

  position: relative;
  --skew: -5deg;
  background: transparent;

  cursor: pointer;
  z-index: 1;
  &::before {
    content: "";
    position: absolute;
    top: -1px;
    bottom: -0.5px;
    right: 0;
    left: 0;
    z-index: -2;
    transform: skewY(var(--skew));
    background-image: linear-gradient(35deg, var(--gradient));
    border-radius: 0.25rem;
    transition: transform 0.24s ease-in;
  }
  &:hover {
    &::before {
      transform: scale(1.01, 1.03) skewY(var(--skew));
    }
  }

  &::after {
    content: "";
    position: absolute;
    z-index: -1;
    bottom: 0;
    right: 0;
    top: 0;
    left: 0;
    transform: skewY(var(--skew));
    background-image: linear-gradient(
      to bottom,
      var(--color-background-alt-alpha),
      var(--color-background-alt) 0.75rem
    );
  }
  & > * {
    text-align: center;
  }

  & div {
    &:nth-child(1) {
    }
  }
`;

export const Flex = styled.div`
  display: flex;
  justify-content: center;
`;

export const CardItem = styled(Flex)`
  &:nth-child(2) {
    font-weight: bold;

    /* padding: 0.5em; */
    color: #ab79d6;

    font-size: 1.35rem;
    line-height: 1.15;
    /* background-color: var(--color-primary); */
  }
  &:nth-child(3) {
    font-size: 1.1rem;
    line-height: 1em;
    padding: 1em;
    font-weight: bold;
  }
  &:nth-child(4) {
    font-style: italic;
    margin-top: -1.2rem;
    font-size: 0.75rem;
    font-weight: 500;
    line-height: 1em;
    padding: 1em;
    & span {
      font-size: 0.78rem;
      font-weight: 600;
      text-transform: uppercase;
      margin-left: 0.25rem;
    }
  }
  &:nth-child(5) {
    font-size: 0.75rem;
    font-weight: 400;
    line-height: 1em;
    /* padding: 1em; */
    text-decoration: underline;
    /* line-height:1rem; */
    margin-top: auto;
  }
`;

export const SecondaryCardContainer = styled.div`
  flex-basis: 100%;
  position: relative;
  padding: 3rem 1rem;
  display: flex;
  flex-direction: column;
  .number {
    /* content: ${(props) => props.serial}; */
    position: absolute;
    font-size: 2rem;
    top: 0em;
    right: 0.5em;
    color: white;
    opacity: 0.65;
    z-index: 1;
    /* font-family: var(--brand-font-alt); */
  }
`;
