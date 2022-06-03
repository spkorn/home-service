import { useState } from "react";
import validator from "validator";

export function useUser() {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //validation
  const [errorForm, setErrorForm] = useState("");
  const [validated, setValidated] = useState(false);

  //email validation
  const [emailError, setEmailError] = useState("");

  const validateEmail = (event) => {
    var validEmail = event.target.value;

    if (!validator.isEmail(validEmail)) {
      setEmailError("กรุณากรอกอีเมลให้ถูกต้อง");
    } else if (validator.isEmpty(validEmail)) {
      setEmailError("กรุณากรอกอีเมล");
    } else {
      setEmailError("");
      setErrorForm("");
    }
    setEmail(validEmail);
  };

  //phone number validation
  const [phoneNumberError, setPhoneNumberError] = useState("");

  const validatePhoneNumber = (event) => {
    const pattern = /^0[6-9]{1}[0-9]{8}$/;
    var validPhoneNumber = event.target.value;
    if (validator.isEmpty(validPhoneNumber)) {
      setPhoneNumberError("กรุณากรอกเบอร์โทรศัพท์");
    } else if (!validator.matches(validPhoneNumber, pattern)) {
      setPhoneNumberError("กรุณากรอกเบอร์โทรศัพท์ให้ถูกต้อง");
    } else {
      setPhoneNumberError("");
      setErrorForm("");
    }
    setPhoneNumber(validPhoneNumber);
  };

  //name validation
  const [nameError, setNameError] = useState("");

  const validateName = (event) => {
    var validName = event.target.value;
    const pattern = /^[a-zA-Z]+ [-,a-zA-Z]+$/;
    if (validator.isEmpty(validName)) {
      setNameError("กรุณากรอกชื่อ-นามสกุล");
    } else if (!validator.matches(validName, pattern)) {
      setNameError("กรุณากรอกชื่อ นามสกุลให้ถูกต้อง");
    } else {
      setNameError("");
      setErrorForm("");
    }
    setName(validName);
  };

  //password validation
  const [passwordError, setPasswordError] = useState("");

  const validatePassword = (event) => {
    var validPassword = event.target.value;
    if (validator.isEmpty(validPassword)) {
      setPasswordError("กรุณากรอกรหัสผ่าน");
    } else if (validPassword.length < 8) {
      setPasswordError("รหัสผ่านต้องมีอย่างน้อย 8 ตัว");
    } else {
      setPasswordError("");
      setErrorForm("");
    }
    setPassword(validPassword);
  };

  //user data
  const loginName = localStorage.getItem("name");
  const userPhoneNumber = localStorage.getItem("phoneNumber");
  const userEmail = localStorage.getItem("email");
  const loginRole = localStorage.getItem("role");

  return {
    name,
    setName,
    phoneNumber,
    setPhoneNumber,
    email,
    setEmail,
    password,
    setPassword,
    errorForm,
    setErrorForm,
    validated,
    setValidated,
    emailError,
    setEmailError,
    validateEmail,
    phoneNumberError,
    setPhoneNumberError,
    validatePhoneNumber,
    nameError,
    setNameError,
    validateName,
    passwordError,
    setPasswordError,
    validatePassword,
    loginName,
    userPhoneNumber,
    userEmail,
    loginRole,
  };
}
