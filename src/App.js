import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import HomePage from "./pages/HomePage/HomePage";
import UserContextProvider from "./components/UserContext";

function App() {
  return <div className="App">
    <UserContextProvider>
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage/>} />
        <Route path="/register" element={<RegisterPage/>} />
        <Route path="/home" element={<HomePage/>}>

        </Route>
      </Routes>
    </Router>
    </UserContextProvider>
  </div>;
}

export default App;
