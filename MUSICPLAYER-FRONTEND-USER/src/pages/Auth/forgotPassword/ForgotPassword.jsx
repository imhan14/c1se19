import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import classNames from "classnames/bind";
import styles from "./ForgotPassword.module.scss";
import { Field, Form, Formik } from "formik";

import { toast } from "react-toastify";
import authAPI from "../../../api/authAPI";

const cx = classNames.bind(styles);

let initialValues = {
  email: "",
};

export default function ForgotPassword() {
  const [isReset, setIsReset] = useState(false);

  const handleSubmit = async (values) => {
    try {
      const result = await authAPI.forgotPassword(values);

      if (result.success) {
        toast.success(result.message);
        setIsReset(true);
      } else {
        toast.error(result.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
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
                  src={require("../../../assets/images/Logo-Offical-gadient.png")}
                  alt="logo"
                />
              </div>
              <h3 className="text-md mb-4 text-white">Melody For Emotion</h3>
              <p className="text-[30px] font-normal text-white font-header mb-4">
                Forgot Password
              </p>
            </div>
            <div className="w-[400px]">
              {isReset ? (
                <p className="text-[20px] font-normal text-white font-header mb-4">
                  Email sent. Please check your email to reset password!
                </p>
              ) : (
                <Formik initialValues={initialValues} onSubmit={handleSubmit}>
                  <Form>
                    <div className="flex flex-col gap-3 items-center">
                      <Field
                        className="rounded-full px-3 py-2 w-full bg-transparent border border-solid border-white"
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Enter your mail"
                      />

                      <button
                        type="submit"
                        className=" py-[10px] w-[200px] block text-center rounded-full bg-primary text-white"
                      >
                        Send
                      </button>
                    </div>
                  </Form>
                </Formik>
              )}
            </div>
            <div className="text-lg flex mt-3 flex-col justify-center items-center gap-3 text-white">
              <p className="">
                Or back to
                <NavLink to="/login" className="text-primary">
                  &nbsp;Sign in
                </NavLink>
              </p>
              <p className="">
                Don't have an account yet?
                <NavLink to="/register" className="text-primary">
                  &nbsp;Register for free
                </NavLink>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
