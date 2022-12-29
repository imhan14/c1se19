import React, { useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import classNames from "classnames/bind";
import styles from "./login.module.scss";
import { Field, Form, Formik, useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from "react-toastify";
import { Input } from "../../assets/styles";
import "react-toastify/dist/ReactToastify.css";

const cx = classNames.bind(styles);

let initialValues = {
  email: "giathai1505@gmail.com",
  password: "123",
};

const validationSchema = Yup.object({
  email: Yup.string().required("Enter your email"),
  password: Yup.string()
    .required("Enter your password")
    .min(8, "Password must be greater than 8 characters"),
  // .matches(
  //   /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
  //   "Password must contain at least 8 characters, one uppercase, one number and one special case character"
  // ),
});

export default function Login() {
  const navigate = useNavigate();
  const handleSubmit = async (values) => {
    toast.success("Wow so easy!");
    try {
      const result = await axios.post(
        "http://localhost:5000/api/auth/login",
        values
      );

      localStorage.setItem(
        "accessToken",
        JSON.stringify(result.data.accessToken)
      );

      navigate("/user-management");
    } catch (error) {
      console.log("login error:", error);
    }
  };

  return (
    <>
      <div className={cx("login")}>
        <div className={cx("main")}>
          <div className="p-5 flex items-center flex-col">
            <div className="flex items-center flex-col">
              <div className={cx("logo")}>
                <img
                  src={require("./../../assets/images/Logo-Offical-gadient.png")}
                  alt="logo"
                />
              </div>
              <h3 className="text-md mb-4 text-white">Melody For Emotion</h3>
              <p className="text-[30px] font-normal text-white font-header mb-4">
                LOGIN
              </p>
            </div>
            <div className="w-[400px]">
              <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
              >
                {({ errors, touched }) => (
                  <Form>
                    <div className="flex flex-col gap-3">
                      {/* <Field
                        className=""
                        id="email"
                        name="email"
                        placeholder="jane@acme.com"
                      /> */}
                      <Input
                        name="email"
                        placeholder="jane@acme.com"
                        className="bg-transparent"
                      />
                      {errors.email && touched.email ? (
                        <div className="text-[#f23030]">{errors.email}</div>
                      ) : null}
                      <Field
                        className="rounded-full outline-none text-white px-3 py-2 bg-transparent border border-solid border-white"
                        id="password"
                        name="password"
                        placeholder="*******"
                      />
                      {errors.password && touched.password ? (
                        <div className="text-[#f23030]">{errors.password}</div>
                      ) : null}
                      <button
                        type="submit"
                        className="px-[50px] py-[10px] rounded-full bg-primary text-white"
                      >
                        Submit
                      </button>
                      {/* <div className="flex justify-end mt-3">
                        <Link
                          to="/forgotPassword"
                          className="text-lg text-primary"
                          type="submit"
                        >
                          Forgot Password?
                        </Link>
                      </div> */}
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
