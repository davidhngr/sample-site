import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { AuthContext } from "../lib/AuthProvider";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

const loginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Please enter a valid email address")
    .required("Email is required"),
  // password: Yup.string()
  //   .min(8, "Password must be 8 characters or longer")
  //   .required("Password is required"),
});

function TextInput({ inputLabel, html, children, ...rest }) {
  let elementField = React.useRef(null);
  const [active, setActive] = React.useState(false);
  const [isVisible, setIsVisible] = React.useState(false);
  let type;

  if (isVisible && html === "password") {
    type = "text";
  } else if (html !== "password") {
    type = "text";
  } else {
    type = "password";
  }

  React.useEffect(() => {
    if (elementField && elementField.value.length !== 0) {
      setActive(true);
    }
  });

  return (
    <div className="input">
      <label
        className={active ? "input-label-active" : "input-label-inactive"}
        htmlFor={html}
      >
        {inputLabel}
      </label>
      {html === "password" && (
        <FontAwesomeIcon
          className="secure-text"
          icon={isVisible ? faEye : faEyeSlash}
          onClick={() => setIsVisible((prev) => !prev)}
        />
      )}
      <input
        className="input-field"
        type={type}
        onFocus={() => setActive(true)}
        onBlur={() => setActive(false)}
        ref={(value) => (elementField = value)}
        {...rest}
      />
      {children}
    </div>
  );
}

export default function Login() {
  const { logIn } = React.useContext(AuthContext);

  return (
    <div className="login">
      <div className="login-container">
        <div className="authentication">
          <h2>Create Account</h2>
          <Formik
            initialValues={{ email: "", password: "" }}
            validateOnMount
            validationSchema={loginSchema}
            onSubmit={(values, actions) => {
              logIn(values.email, values.password);
              // console.log("email: ", values.email);
              // console.log("password: ", values.password);
            }}
          >
            {({ values, errors, touched, handleChange, handleSubmit }) => (
              <form onSubmit={handleSubmit}>
                <TextInput
                  inputLabel="Email"
                  name="email"
                  html="email"
                  value={values.email}
                  onChange={handleChange}
                >
                  {errors.email && touched.email && (
                    <div className="error-text">{errors.email}</div>
                  )}
                </TextInput>
                <TextInput
                  inputLabel="Password"
                  name="password"
                  html="password"
                  values={values.password}
                  onChange={handleChange}
                />
                {errors.invalidCredentials && (
                  <div className="error-text">{errors.invalidCredentials}</div>
                )}
                <button className="button" type="submit">
                  Login
                </button>
              </form>
            )}
          </Formik>
        </div>
        <div className="backdrop"></div>
      </div>
    </div>
  );
}
