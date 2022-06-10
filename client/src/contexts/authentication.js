import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import jwtDecode from "jwt-decode";

const AuthContext = React.createContext();

function AuthProvider(props) {
  const [state, setState] = useState({
    loading: null,
    error: null,
    user: {},
  });

  const [errorLogin, setErrorLogin] = useState("");

  const navigate = useNavigate();

  const register = async (data) => {
    await axios.post("http://localhost:4000/auth/register", data);
    navigate("/login");
  };

  const login = async (data) => {
    try {
      const result = await axios.post("http://localhost:4000/auth/login", data);
      const token = result.data.token;
      localStorage.setItem("token", token);
      const dataToken = jwtDecode(token);
      setState({ ...state, user: dataToken });
      localStorage.setItem("name", dataToken.name);
      localStorage.setItem("user_id", dataToken.user_id);
      localStorage.setItem("role", dataToken.role);
      localStorage.setItem("phoneNumber", dataToken.phoneNumber);
      localStorage.setItem("email", dataToken.email);
      if (dataToken.role === "admin") {
        navigate("/category-dashboard");
      } else if (dataToken.role === "customer") {
        navigate("/");
      }
    } catch (e) {
        if (e.response && e.response.data) {
          setErrorLogin("อีเมลหรือรหัสผ่านไม่ถูกต้อง")
        }
      }
  };

  const logout = () => {
    localStorage.removeItem("token");
    setState({ ...state, user: null, error: null });
    localStorage.removeItem("name"); 
    localStorage.removeItem("user_id");
    localStorage.removeItem("phoneNumbser");
    localStorage.removeItem("email");
    navigate("/");
  };

  const isAuthenticated = Boolean(localStorage.getItem("token"));

  return (
    <AuthContext.Provider
      value={{ state, login, logout, register, isAuthenticated, errorLogin, setErrorLogin }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}

const useAuth = () => React.useContext(AuthContext);

export { AuthProvider, useAuth };
