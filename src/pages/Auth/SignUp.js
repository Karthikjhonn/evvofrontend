import React from "react";
import FormError from "../../components/error/FormError";
import { useFormik } from "formik";
import { signUpValidation } from "../../constants/validation/Validation";
import { useNavigate } from "react-router-dom";
import Loader from "../../components/loader/Loader";
import Button from "../../components/button/Button";
import { useAuth } from "../../context/AuthContext";
import { CgAtlasian } from "react-icons/cg";
import amongUsImage from "../../asset/image/amongus.png";

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
    <div className="h-dvh grid p-5 lg:grid-cols-2 xl:grid-cols-3">
      <div
        style={{ backgroundImage: `url(${amongUsImage})` }}
        className="bg-athens-gray-100/75  rounded-lg w-full h-full min-h-36 xl:col-span-2 bg-cover bg-no-repeat bg-right"
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
      </form>
    </div>
  );
}

export default SignUp;
