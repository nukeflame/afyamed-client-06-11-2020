/**
 * Authentication package
 */

import Cookies from "js-cookie";

export const getToken = () => {
  var token = Cookies.get("token");
  var expiration = Cookies.get("expiration");

  if (!token || !expiration) {
    destroyToken();
    return false;
  }

  if (Date.now() > parseInt(expiration, 10)) {
    return false;
  } else {
    return token;
  }
};

export const isLoggedIn = () => {
  if (getToken()) {
    return true;
  } else {
    return false;
  }
};

export const setToken = (token, expiration) => {
  Cookies.set("token", token, { path: "/" });
  Cookies.set("expiration", expiration, { path: "/" });
};

export const destroyToken = () => {
  Cookies.remove("token");
  Cookies.remove("expiration");
};

export const clearConsole = () => {
  console.clear();
};

export const setClientData = client => {
  // const encyrpted = JSON.stringify(client);
  // localStorage.setItem("client", JSON.stringify(encyrpted));
  localStorage.setItem("client", JSON.stringify(client));
};

export const getClientData = () => {
  // const decrypted = localStorage.getItem("client");
  // console.log(decrypted);

  return JSON.parse(localStorage.getItem("client"));
  // return Cookies.get("client");
};
