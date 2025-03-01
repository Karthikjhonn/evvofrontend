import axios from "axios";
import Cookies from "js-cookie";

const base_URL = process.env.REACT_APP_API_URL;
console.log(process.env.NODE_ENV);
axios.defaults.withCredentials = true;

const getHeaders = () => {
  const token = Cookies.get("token");
  return {
    "Content-Type": "application/json",
    Authorization: token ? `Bearer ${token}` : null,
  };
};

export const POST = (url, data,signal) => {
  return axios.post(`${base_URL}${url}`, data, {
    headers: getHeaders(),
    withCredentials: true,
    signal:signal
  });
};
export const DELETE = (url, data) => {
  return axios.delete(`${base_URL}${url}`, {
    data: data,
    headers: getHeaders(),
    withCredentials: true,
  });
};
export const GET = (url) => {
  return axios.get(`${base_URL}${url}`, {
    headers: getHeaders(),
    withCredentials: true,
  });
};
