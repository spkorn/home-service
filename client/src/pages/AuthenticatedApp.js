import { Routes, Route } from "react-router-dom";

import HomePage from "./HomePage";
import UserProfile from "./Profile";
import ServicePage from "./ServicePage";
import AdminPage from "./AdminPage";
import "../App.css";

function AuthenticatedApp() {
  const loginRole = localStorage.getItem("role");
  return (
    <div className="App">
      {loginRole === "customer" ? (
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/profile" element={<UserProfile />} />
          <Route path="/service" element={<ServicePage />} />
          <Route path="/admin" element={<AdminPage />} />
        </Routes>
      ) : (
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/profile" element={<UserProfile />} />
          <Route path="/service" element={<ServicePage />} />
        </Routes>
      )}
    </div>
  );
}

export default AuthenticatedApp;
