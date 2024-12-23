import React, { useState } from "react";
import FormError from "../../components/error/FormError";
import { useFormik } from "formik";
import { loginValidation } from "../../constants/validation/Validation";
import { useNavigate } from "react-router-dom";
import Loader from "../../components/loader/Loader";
import Button from "../../components/button/Button";
import { useAuth } from "../../context/AuthContext";
import { CgAtlasian } from "react-icons/cg";
import minionImage from "../../asset/image/minion.png";
function Login() {
  const { logIn, loading } = useAuth();
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: loginValidation,
    onSubmit: (values) => {
      console.log(values);
      const payload = {
        email: values.email,
        password: values.password,
      };
      logIn(payload);
    },
  });

  return (
    <div className="h-dvh grid p-5 lg:grid-cols-2 xl:grid-cols-3">
      <div
        className="bg-athens-gray-100/75  rounded-lg w-full h-full min-h-36 xl:col-span-2 bg-cover bg-no-repeat bg-center bg-blend-darken "
        style={{ backgroundImage: `url(${minionImage})` }}
      ></div>
      <form className="w-full max-w-md m-auto" onSubmit={formik.handleSubmit}>
        <div className="w-full bg-white rounded-lg  md:mt-0 sm:max-w-md xl:p-0">
          <div className="my-6 md:my-0 space-y-4  sm:p-8">
            <div>
              <span className="inline-flex justify-center items-center size-9 rounded-lg bg-black">
                <CgAtlasian className="text-white text-2xl " />
              </span>
            </div>
            <div className="space-y-1">
              <p className="text-xl font-bold leading-tight tracking-tight text-black md:text-2xl">
                Welcome Back
              </p>
              <p className="text-sm  leading-tight tracking-tight text-black/50 ">
                We missed you, login to continue
              </p>
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-black">
                Email
              </label>
              <input
                placeholder="Karthick@gmail.com"
                className="bg-gray-50 border border-gray-300 text-black sm:text-sm rounded-lg block w-full p-2.5"
                id="email"
                type="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />

              <FormError error={formik.touched.email && formik.errors.email} />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-black">
                Password
              </label>
              <input
                className="bg-gray-50 border border-gray-300 text-black sm:text-sm rounded-lg block w-full p-2.5"
                placeholder="••••••••"
                id="password"
                type="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />

              <FormError
                error={formik.errors.password && formik.touched.password}
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-black">
                Confirm password
              </label>
              <input
                className="bg-gray-50 border border-gray-300 text-black sm:text-sm rounded-lg block w-full p-2.5"
                placeholder="••••••••"
                id="confirmPassword"
                type="password"
                value={formik.values.confirmPassword}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />

              <FormError
                error={
                  formik.touched.confirmPassword &&
                  formik.errors.confirmPassword
                }
              />
            </div>

            <Button
              type="submit"
              name={loading ? <Loader /> : "Login"}
              disable={loading}
            />
            <p className="my-2 text-black text-center text-xs cursor-default">
              Don't have an account?{" "}
              <span
                className="font-semibold cursor-pointer"
                onClick={() => navigate("/sign-up")}
              >
                Create
              </span>
            </p>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Login;
