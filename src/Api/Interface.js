import axios from "axios";
// const base_URL = "http://localhost:3300";
const base_URL = "https://evvo-backend.onrender.com";
const token = localStorage.getItem("token") || null;
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

      Authorization: `Bearer ${token}`,
    },
    withCredentials: true,
  });
};
