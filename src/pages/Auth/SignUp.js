import React, { useState } from "react";
import FormError from "../../components/error/FormError";
import { useFormik } from "formik";
import { signUpValidation } from "../../constants/validation/Validation";
import { CreateUser, LoginAuth } from "../../Api/ApiIndex";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import Loader from "../../components/loader/Loader";
import Button from "../../components/button/Button";
import { useAuth } from "../../context/AuthContext";
import Cookies from "js-cookie";
function SignUp() {
  const { signIn, loading } = useAuth();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    validationSchema: signUpValidation,
    onSubmit: (values) => {
      console.log(values);
      const payload = {
        name: values.name,
        email: values.email,
        password: values.password,
      };
      //   console.log(payload);
      signIn(payload);
    },
  });

  return (
    <div className="flex justify-center items-center h-dvh bg-container dark">
      <form className="w-full max-w-md" onSubmit={formik.handleSubmit}>
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0">
          <div className="w-full bg-white rounded-lg shadow border md:mt-0 sm:max-w-md xl:p-0">
            <div className="p-6 space-y-4  sm:p-8">
              <div className="space-y-1">
                <p className="text-xl font-bold leading-tight tracking-tight text-black md:text-2xl">
                  Join Us Today!
                </p>
                <p className="text-sm  leading-tight tracking-tight text-black/50 ">
                  Create an account to start your journey with us.
                </p>
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-black">
                  Name
                </label>
                <input
                  className="bg-gray-50 border border-gray-300 text-black sm:text-sm rounded-lg block w-full p-2.5"
                  placeholder="karthick"
                  id="name"
                  type="text"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                <FormError error={formik.touched.name && formik.errors.name} />
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

                <FormError
                  error={formik.touched.email && formik.errors.email}
                />
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
                  error={formik.touched.password && formik.errors.password}
                />
              </div>
              <Button
                type="submit"
                name={loading ? <Loader /> : "Sign Up"}
                disable={loading}
              />
              <p className="my-2 text-black/75 text-center text-xs cursor-default">
                Have an account already?{" "}
                <span
                  className="font-semibold cursor-pointer text-black"
                  onClick={() => navigate("/login")}
                >
                  Login
                </span>
              </p>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default SignUp;
