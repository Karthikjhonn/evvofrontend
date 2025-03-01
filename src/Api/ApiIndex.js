import { DELETE, GET, POST } from "./Interface";


export const startServer = ()=>{
  return GET("/")
}
export const LoginAuth = (payload,signal) => {
  return POST(`/api/v1/user/sign-in`, payload ,signal);
};
export const CreateUser = (payload) => {
  return POST(`/api/v1/user/sign-up`, payload);
};
export const getUser = () => {
  return GET(`/api/v1/user/getUser`);
};
export const leaveRequest = (payload) => {
  return POST(`/api/v1/leaveRequest`, payload);
};
export const deleteLeaveRequest = (payload) => {
  return DELETE(`/api/v1/leaveRequest/delete`, payload);
};
