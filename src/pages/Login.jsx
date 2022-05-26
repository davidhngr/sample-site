import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { AuthContext } from "../lib/AuthProvider";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

const loginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid Email Address")
    .required("Email is required"),
  password: Yup.string()
    .min(8, "Password must be 8 characters or longer")
    .required("Password is required"),
});

function TextInput({ inputLabel, name, html, value, onChange, handleBlur }) {
  const element = React.useRef(null);
  const elementLabel = React.useRef(null);
  let elementField = React.useRef(null);

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
    document.addEventListener("mousedown", (event) => {
      if (element.current.contains(event.target)) {
        elementLabel.current.className = "input-label-active";
      } else {
        elementLabel.current.className = "input-label-inactive";
      }

      if (elementField && elementField.value.length !== 0) {
        elementLabel.current.className = "input-label-active";
      }
    });
  });

  return (
    <div className="input" ref={element}>
      <label className="input-label-inactive" htmlFor={html} ref={elementLabel}>
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
        name={name}
        type={type}
        ref={(value) => (elementField = value)}
        value={value}
        onChange={onChange}
        handleBlur={handleBlur}
      />
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
            // validationSchema={loginSchema}
            onSubmit={(values, actions) => {
              logIn(values.email, values.password);
              // console.log("email: ", values.email);
              // console.log("password: ", values.password);
            }}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleSubmit,
              handleBlur,
            }) => (
              <form onSubmit={handleSubmit}>
                <TextInput
                  inputLabel="Email"
                  name="email"
                  html="email"
                  value={values.email}
                  onChange={handleChange}
                  handleBlur={handleBlur}
                />
                <TextInput
                  inputLabel="Password"
                  name="password"
                  html="password"
                  values={values.password}
                  onChange={handleChange}
                  handleBlur={handleBlur}
                />
                <button className="button-filled">Login</button>
              </form>
            )}
          </Formik>
        </div>
        <div className="backdrop"></div>
      </div>
    </div>
  );
}
