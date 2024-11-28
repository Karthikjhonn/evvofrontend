import { DELETE, GET, POST } from "./Interface";

export const LoginAuth = (payload) => {
  return POST(`/api/v1/user/sign-in`, payload);
};
export const CreateUser = (payload) => {
  return POST(`/api/v1/user/sign-up`, payload);
};
export const getUser = (payload) => {
  return GET(`/api/v1/user/getUser/${payload}`);
};
export const leaveRequest = (payload) => {
  return POST(`/api/v1/leaveRequest`, payload);
};
export const deleteLeaveRequest = (payload) => {
  return DELETE(`/api/v1/leaveRequest/delete`, payload);
};
