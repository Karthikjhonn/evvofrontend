import axios from "axios";
import Cookies from "js-cookie";

const base_URL = process.env.REACT_APP_API_URL
console.log(process.env.NODE_ENV);

const token = Cookies.get("token") || null;
axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
axios.defaults.withCredentials = true;
export const POST = (url, data) => {
  return axios.post(`${base_URL}${url}`, data, {
    headers: {
      "Content-Type": "application/json",
    },
    withCredentials: true,
  });
};
export const DELETE = (url, data) => {
  return axios.delete(`${base_URL}${url}`, {
    data: data,
    headers: {
      "Content-Type": "application/json",
    },
    withCredentials: true,
  });
};
export const GET = (url) => {
  return axios.get(`${base_URL}${url}`, {
    headers: {
      "Content-Type": "application/json",
    },
    withCredentials: true,
  });
};
