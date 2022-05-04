import { Routes, Route } from "react-router-dom";

import HomePage from "./HomePage";
import "../App.css";

function AuthenticatedApp() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default AuthenticatedApp;
