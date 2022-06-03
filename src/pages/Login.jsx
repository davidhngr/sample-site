import React from "react";
import TextInput from "../components/TextInput/TextInput";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquare, faCheckSquare } from "@fortawesome/free-regular-svg-icons";

import { getCookie, decryptText } from "../utils/helpers";
import { useFormik } from "formik";
import * as Yup from "yup";

import { AuthContext } from "../lib/AuthProvider";
import { useNavigate } from "react-router-dom";

const loginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Please enter a valid email address")
    .required("Email is required"),
  password: Yup.string()
    // .min(8, "Password must be 8 characters or longer")
    .required("Password is required"),
});

const LoginForm = () => {
  const { logIn, error, remember, setRemember } = React.useContext(AuthContext);

  const RememberMe = () => (
    <div className="remember">
      <div
        className="remember-container"
        onClick={() => setRemember((prev) => !prev)}
      >
        <FontAwesomeIcon
          className="remember-icon"
          icon={remember ? faCheckSquare : faSquare}
        />
        <div className="remember-text">Remember me</div>
      </div>
    </div>
  );

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      email: decryptText(getCookie("email")),
      password: decryptText(getCookie("password")),
    },
    validateOnMount: true,
    validationSchema: loginSchema,
    onSubmit: (values, actions) => {
      logIn(values.email, values.password);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <TextInput
        inputLabel="Email"
        name="email"
        html="email"
        value={formik.values.email}
        onChange={formik.handleChange}
        autoFocus
      />
      {formik.errors.email && formik.touched.email && (
        <div className="error-text">{formik.errors.email}</div>
      )}
      <TextInput
        inputLabel="Password"
        name="password"
        html="password"
        value={formik.values.password}
        onChange={formik.handleChange}
      />
      <div className="error-text">{error}</div>
      <RememberMe />
      <button className="button" type="submit">
        Login
      </button>
    </form>
  );
};

export default function Login() {
  const { auth } = React.useContext(AuthContext);
  const navigate = useNavigate();

  React.useEffect(() => {
    if (auth) {
      navigate("/");
    }
  }, [auth]);

  return (
    <div className="login">
      <div className="login-container">
        <div className="authentication">
          <h2>Create Account</h2>
          <LoginForm />
        </div>
        <div className="backdrop"></div>
      </div>
    </div>
  );
}
