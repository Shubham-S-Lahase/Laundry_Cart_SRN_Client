import React from "react";
import MyRouter from "./router/MyRouter";
import UserContextProvider from "./components/UserContext";
function App() {
  return (
    <div className="App">
      <UserContextProvider>
        <MyRouter />
      </UserContextProvider>
    </div>
  );
}

export default App;
