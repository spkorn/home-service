import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import LoginPage from "./LoginPage";
import RegisterPage from "./RegisterPage";
import "../App.css";

function UnauthenticatedApp() {
  return (
    <div className="App">
      <Routes>
        <Route path="*" element={<HomePage />} />
        {/* <Route path="/login" element={<LoginPage />} /> */}
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </div>
  );
}

export default UnauthenticatedApp;