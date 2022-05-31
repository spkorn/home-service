import "../App.css";
import Nav from "../components/Nav";
import { useAuth } from "../contexts/authentication.js";
import { useNavigate } from "react-router-dom";
import { useUser } from "../hooks/user";

function LoginPage() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (
      emailError === "" &&
      passwordError === "" &&
      email !== "" &&
      password !== ""
    ) {
      login({
        email,
        password,
      });
    } else {
      setErrorForm("กรุณากรอกอีเมลและรหัสผ่านให้ถูกต้อง");
    }
  };

  const {
    email,
    password,
    errorForm,
    setErrorForm,
    emailError,
    validateEmail,
    passwordError,
    validatePassword,
  } = useUser();

  return (
    <div className="login-form-container" onSubmit={handleSubmit}>
      <Nav />
      <div className="min-h-screen flex justify-center bg-bg">
        <form className="bg-white border border-grey300 rounded-lg w-[614px] h-full mt-[52px] mb-[87px] px-[87px] pt-[32px] pb-[53px]">
          <h1 className="text-blue950 text-center text-[32px] font-medium">
            เข้าสู่ระบบ{" "}
          </h1>
          <div className="mt-5">
            <label>
              <h5>
                อีเมล<span className="text-red">*</span>
              </h5>
              <input
                id="email"
                name="email"
                placeholder="กรุณากรอกอีเมล"
                onChange={(event) => {
                  validateEmail(event);
                }}
                value={email}
                className="border rounded-lg border-grey300 w-full h-11 px-4 py-2.5"
              />
              <br />
              <p className="text-red text-xs">{emailError}</p>
            </label>
          </div>
          <div className="mt-5">
            <label>
              <h5>
                รหัสผ่าน<span className="text-red">*</span>
              </h5>
              <input
                id="password"
                name="password"
                type="password"
                placeholder="กรุณากรอกรหัสผ่าน"
                onChange={(event) => {
                  validatePassword(event);
                }}
                value={password}
                className="border rounded-lg border-grey300 w-full h-11 px-4 py-2.5"
              />
              <br />
              <p className="text-red text-xs">{passwordError}</p>
            </label>
          </div>
          <br />
          <div className="form-actions">
            <p className="text-red text-xs text-center">{errorForm}</p>
            <button className="btn-primary w-full mt-5 mb-[42px]" type="submit">
              เข้าสู่ระบบ
            </button>
            <div className="text-center">
              <span className="text-grey700">
                ยังไม่มีบัญชีผู้ใช้ HomeServices?{" "}
              </span>
              <button
                className="btn-ghost"
                onClick={() => navigate("/register")}
              >
                ลงทะเบียน
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
