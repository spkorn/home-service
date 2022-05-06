import { Routes, Route } from "react-router-dom";

import HomePage from "./HomePage";
import UserProfile from "./Profile";
import ServicePage from "./ServicePage";
import "../App.css";

function AuthenticatedApp() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/profile" element={<UserProfile />} />
        <Route path="/service" element={<ServicePage />} />
      </Routes>
    </div>
  );
}

export default AuthenticatedApp;
