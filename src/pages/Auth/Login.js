import React, { useState } from "react";
import FormError from "../../components/error/FormError";
import { useFormik } from "formik";
import { loginValidation } from "../../constants/validation/Validation";
import { LoginAuth } from "../../Api/ApiIndex";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import Loader from "../../components/loader/Loader";
import Button from "../../components/button/Button";
import { useAuth } from "../../context/AuthContext";
function Login() {
  const { setIsAuth } = useAuth();
  const [loading, setLoading] = useState(false);
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
      getAuth(payload);
    },
  });

  const getAuth = async (payload) => {
    try {
      setLoading(true);
      const res = await LoginAuth(payload);
      if (res.status == 200) {
        console.log(res?.data?.token);
        localStorage.setItem("token", res?.data?.token);
        localStorage.setItem("userId", res?.data?.user?.id);
        setIsAuth(true);
        console.log(res?.data?.message);
        toast.success(res?.data?.message || "Welcome Back!");
        setLoading(false);
        navigate("/");
      }
    } catch (error) {
      console.log(error);
      toast.error(error?.response?.data?.message || "Some thing went wrong!");
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="flex justify-center items-center h-dvh bg-container dark">
      <form className="w-full max-w-md" onSubmit={formik.handleSubmit}>
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0">
          <div className="w-full bg-white rounded-lg shadow border md:mt-0 sm:max-w-md xl:p-0">
            <div className="p-6 space-y-4  sm:p-8">
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

              <Button type="submit" name={loading ? <Loader /> : "Login"} disable={loading} />
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
        </div>
      </form>
    </div>
  );
}

export default Login;
