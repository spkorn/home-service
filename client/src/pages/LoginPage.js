/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import "../App.css";
import { useState } from "react";
import NavNonLogin from "../components/HomePage/NavNonLogin.js";
import { useAuth } from "../contexts/authentication.js";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {login} = useAuth();

  const handleSubmit = (event) => {
    event.preventDefault();
    login({
      email,
      password
    });
  };

  return (
    <div className="login-form-container" onSubmit={handleSubmit}>
      <NavNonLogin />
      <div
        className="w-screen flex justify-center"
        css={css`
          background-color: #f3f4f6;
        `}
      >
        <form
          className="bg-white border border-grey300 rounded-lg"
          css={css`
            width: 614px;
            padding: 32px 87px 55px 87px;
            margin-top: 52px;
            margin-bottom: 87px;
          `}
        >
          <h1 className="text-blue950 text-center">เข้าสู่ระบบ </h1>
          <div className="mt-5">
            <label>
              <h5>
                อีเมล<span className="text-red">*</span>
              </h5>
              <input
                required
                id="email"
                name="email"
                type="email"
                placeholder="กรุณากรอกอีเมล"
                onChange={(event) => {
                  setEmail(event.target.value);
                }}
                value={email}
              />
            </label>
          </div>
          <div className="mt-5">
            <label>
              <h5>
                รหัสผ่าน<span className="text-red">*</span>
              </h5>
              <input
                required
                id="password"
                name="password"
                type="password"
                placeholder="กรุณากรอกรหัสผ่าน"
                onChange={(event) => {
                  setPassword(event.target.value);
                }}
                value={password}
              />
            </label>
          </div>
          <br />
          <div className="form-actions">
            <button
              className="btn-primary"
              css={css`
                width: 100%;
                margin-top: 20px;
                margin-bottom: 42px;
              `}
              type="submit"
            >
              เข้าสู่ระบบ
            </button>
            <div className="text-center">
              <span className="text-grey700">
                ยังไม่มีบัญชีผู้ใช้ HomeService?{" "}
              </span>
              <Link
                to="/register"
              >
                ลงทะเบียน
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
