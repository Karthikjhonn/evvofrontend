import * as Yup from "yup";

export const signUpValidation = Yup.object({
  name: Yup.string().required("User name is required"),
  email: Yup.string().email("Invalid email address").required("Required"),
  password: Yup.string().min(3, "Too short").required("Required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords must match")
    .required("Confirm Password is required"),
});
export const loginValidation = Yup.object({
  email: Yup.string().email("Invalid email address").required("Required"),
  password: Yup.string().min(3, "Too short").required("Required"),
  // confirmPassword: Yup.string()
  //   .oneOf([Yup.ref("password")], "Passwords must match")
  //   .required("Confirm Password is required"),
});

export const leaveRequestValidation = Yup.object({
  leaveType: Yup.string().required("Leave type is required"),
  startDate: Yup.date().required("Start date is required"),
  endDate: Yup.date()
    .min(Yup.ref("startDate"), "End date must be later than start date")
    .required("End date is required"),
  comments: Yup.string().required("Comments are required"),
});
