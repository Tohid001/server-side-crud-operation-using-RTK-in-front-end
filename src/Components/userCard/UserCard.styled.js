import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const UserDetailsLink = styled(NavLink)`
  all: unset;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  padding: 1em;
  font-weight: bold;
  gap: 1rem;
  & span {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.2rem;
  }
`;

export const HoveringItem = styled.div`
  display: grid;
  place-items: center;
  /* justify-content: center; */
  z-index: 21;
  background: transparent;
  position: absolute;
  inset: 0;
  &::before {
    content: "";
    position: absolute;
    inset: 0;
    transform: scaleX(0);
    background: rgba(252, 0, 193, 0.85);
    transition: transform 0.24s ease-in 0.3s;
  }

  & div {
    transform: scaleY(0);
    transform-origin: bottom;
    transition: transform 0.2s ease-in 0s;
    /* transition: border-color 0.1s; */
    border: 2.5px solid rgba(255, 255, 255, 0.6);
    background-color: rgba(0, 0, 0, 0.6);
    &:hover {
      border-color: rgba(255, 255, 255, 1);
    }
  }
`;

export const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #c5c5ce;
  position: relative;
  --skew: -5deg;
  background: transparent;
  /* cursor: pointer; */
  z-index: 1;
  padding: 0;
  &::before {
    content: "";
    position: absolute;
    inset: 0;
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
    inset: 0;
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

  &:hover {
    & ${HoveringItem} {
      &::before {
        transition-delay: 0s;
        transform: scaleX(1) skewY(var(--skew));
      }
      & div {
        transition-delay: 0.25s;
        transform: scaleY(1);
        /* transition-timing-function: 0.2s; */
      }
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
    color: white;
    opacity: 0.92;
  }
  &:nth-child(4) {
    opacity: 0.8;
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
    font-size: 0.8rem;
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
    opacity: 0.45;
    z-index: 1;
    /* font-family: var(--brand-font-alt); */
  }
`;
