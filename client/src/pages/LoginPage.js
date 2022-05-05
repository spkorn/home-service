/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import "../App.css";
import NavNonLogin from "../components/HomePage/NavNonLogin";

function LoginPage() {

  return (
    <div className="login-form-container">
          <NavNonLogin />
          <h1>หน้า login จ้า</h1>
    </div>
  );
}

export default LoginPage;
