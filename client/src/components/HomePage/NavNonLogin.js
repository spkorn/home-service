/** @jsxImportSource @emotion/react */
import "../../App.css";
import { css } from "@emotion/react";
import image from "../../HomePagePhoto/imageIndex.js";
import { useNavigate } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function NavNonLogin() {
  const navigate = useNavigate();
  return (
    <nav
      css={css`
        width: 100vw;
        height: 80px;
        display: flex;
        justify-content: space-between;
        padding: 0px 10vw 0px 10vw;
        align-items: center;
        box-shadow: 2px 2px 24px rgba(23, 51, 106, 0.12);
        position: -webkit-sticky;
        position: sticky;
        top: 0;
        z-index: 100;
        background-color: white;
      `}
    >
      <div
        className="left-items"
        css={css`
          display: flex;
          align-items: center;
        `}
      >
        <div
          className="home-service-logo"
          css={css`
            display: flex;
            width: 207px;
            height: 36px;
            justify-content: space-between;
            align-items: center;
            margin-right: 70px;
          `}
        >
          <Link to="/">
          <img
            alt="Home Services Logo"
            src={image.logoHomeService}
            css={css`
              width: 32px;
              height: 32px;
            `}
            />
          </Link>
          <Link to="/" className="text-blue600 text-2xl no-underline">
            HomeServices
          </Link>
        </div>
        <h5
          css={css`
            font-size: 16px;
          `}
        >
          บริการของเรา
        </h5>
      </div>
      <button onClick={() => navigate("/login")} className="btn-secondary">
        เข้าสู่ระบบ
      </button>
    </nav>
  );
}

export default NavNonLogin;
