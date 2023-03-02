import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage/LoginPage";

function App() {
  return <div className="App">
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage/>} />
      </Routes>
    </Router>
  </div>;
}

export default App;
