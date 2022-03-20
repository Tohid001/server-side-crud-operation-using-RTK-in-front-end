import React from "react";
import { UserProvider } from "../../Contexts/HeaderContext.js";

function App() {
  console.log("App rendered");
  return (
    <UserProvider>
      <div>App</div>
    </UserProvider>
  );
}

export default App;
