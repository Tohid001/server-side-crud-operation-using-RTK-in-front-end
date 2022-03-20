import React from "react";
import { GlobalReset } from "./Global.styled.js";
import { UserProvider } from "./Contexts/TodosContext";

function App() {
  console.log("App rendered");
  return (
    <UserProvider>
      <GlobalReset />
      <div>App</div>
    </UserProvider>
  );
}

export default App;
