import { API_URL } from "./env";
import axios from "axios";
import { getToken } from "../auth";

// const socketId = window.Echo && window.Echo.socketId();

const baseurl = axios.create({
  baseURL: API_URL,
  timeout: 100000,
  headers: {
    "content-Type": "application/json"
    // "X-Socket-ID" : typeof socketId !== "undefined" ? socketId : null
  }
});

baseurl.interceptors.request.use(config => {
  const token = getToken();
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export default baseurl;
