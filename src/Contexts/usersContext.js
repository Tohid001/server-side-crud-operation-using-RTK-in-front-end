import React, { createContext, useReducer, useEffect } from "react";

let Context = null;
const { Provider, Consumer } = (Context = createContext());

const initialState = [];
const reducer = (state, { type, value }) => {
  switch (type) {
    case "getUsers":
      return value;
    case "addUsers":
      return [...state, value];
    case "deleteUsers":
      return value;
    default:
      return state;
  }
};

function UserProvider(props) {
  const [data, dispatch] = useReducer(reducer, initialState);
  console.log("context", data);
  return <Provider value={[data, dispatch]}>{props.children}</Provider>;
}
export { UserProvider, Consumer as UserConsumer, Context as UserContext };
