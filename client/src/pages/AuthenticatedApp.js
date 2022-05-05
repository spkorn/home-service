import { Routes, Route } from "react-router-dom";

import HomePage from "./HomePage";
import UserProfile from "./Profile";
import "../App.css";

function AuthenticatedApp() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/profile" element={<UserProfile />} />
      </Routes>
    </div>
  );
}

export default AuthenticatedApp;
