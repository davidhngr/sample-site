import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const loginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid Email Address")
    .required("Email is required"),
  password: Yup.string()
    .min(8, "Password must be 8 characters or longer")
    .required("Password is required"),
});

export default function Login() {
  return (
    <div className="login">
      <div className="login-container">
        <div className="authentication">
          <h2>Create Account</h2>
          <Formik
            initialValues={{ email: "", password: "" }}
            validateOnMount
            validationSchema={loginSchema}
          >
            {({ handleChange, values, handleSubmit, errors, touched }) => (
              <Form>
                <div className="input" onMouseDown={}>
                  <label className="input-label-active" htmlFor="email" id="email-label">Email</label>
                  <Field className="input-field" name="email" type="text" />
                </div>
              </Form>
            )}
          </Formik>
        </div>
        <div className="backdrop"></div>
      </div>
    </div>
  );
}
