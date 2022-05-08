/** @jsxImportSource @emotion/react */
import "../../App.css";
import { css } from "@emotion/react";
import image from "../../HomePagePhoto/imageIndex.js";
import { useNavigate } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useAuth } from "../../contexts/authentication.js";

function Nav() {
  const navigate = useNavigate();
  const auth = useAuth();
  const { logout } = useAuth();
  const loginName = localStorage.getItem("name"); // ใช้อันนี้แล้ว user name บน nav ไม่หายตอน refresh
  //const { state } = useAuth();
  //console.log(loginName);

  return (
    <nav
      className="flex justify-between w-screen items-center bg-white h-20"
      css={css`
        padding: 0px 10vw 0px 10vw;
        box-shadow: 2px 2px 24px rgba(23, 51, 106, 0.12);
        position: -webkit-sticky;
        position: sticky;
        top: 0;
        z-index: 100;
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
          className="cursor-pointer"
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
        <h5 className="cursor-pointer" onClick={() => navigate("/service")}>
          บริการของเรา
        </h5>
      </div>
      <div>
        {auth.isAuthenticated ? (
          <div className="dropdown cursor-pointer">
            <div className="flex items-center cursor-pointer">
              <p className="text-grey700 text-sm">{loginName}</p>
              <img
                src={image.avatar}
                className="rounded-full w-10 h-10 mx-4 "
                alt="user's display"
              />
            </div>
            <div className="dropdown-content cursor-pointer">
              <div className="flex items-center hover:bg-grey100 hover:bg-opacity-50 hover:text-grey950">
                <img
                  src={image.profileIcon}
                  className="ml-4 mr-2 my-2 "
                  alt="ข้อมูลผู้ใช้งาน"
                />
                <Link to="/profile">ข้อมูลผู้ใช้งาน</Link>
              </div>
              <div className="flex items-center hover:bg-grey100 hover:bg-opacity-50 hover:text-grey950">
                <img
                  src={image.orderIcon}
                  className="ml-4 mr-2 my-2 "
                  alt="รายการคำสั่งซ่อม"
                />
                <Link to="/">รายการคำสั่งซ่อม</Link>
              </div>
              <div className="flex items-center hover:bg-grey100 hover:bg-opacity-50 hover:text-grey950">
                <img
                  src={image.historyIcon}
                  className="ml-4 mr-2 my-2 "
                  alt="ประวัติการซ่อม"
                />
                <Link to="/">ประวัติการซ่อม</Link>
              </div>
              <hr className="text-grey300 my-1" />
              <div className="flex items-center hover:bg-grey100 hover:bg-opacity-50 hover:text-grey950">
                <img
                  src={image.logoutIcon}
                  className="ml-4 mr-2 my-2 "
                  alt="ออกจากระบบ"
                />
                <Link
                  to="/"
                  onClick={() => {
                    logout();
                  }}
                >
                  ออกจากระบบ
                </Link>
              </div>
            </div>
          </div>
        ) : (
          <button onClick={() => navigate("/login")} className="btn-secondary">
            เข้าสู่ระบบ
          </button>
        )}
      </div>
    </nav>
  );
}

export default Nav;
