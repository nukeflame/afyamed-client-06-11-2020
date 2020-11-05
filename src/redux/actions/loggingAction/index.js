import baseurl from "../../../config/urls/baseurl";
import { setToken } from "../../../config/auth";
import * as actionTypes from "../types";

const API = "api/login";

export const logginUser = data => dispatch => {
  return new Promise(resolve => {
    dispatch({ type: actionTypes.LOGGING_USER, payload: true });
    baseurl
      .post(API, data)
      .then(res => {
        setToken(res.data.token, res.data.expiration + Date.now());
        const level = res.data.acc_level;
        resolve(level);
      })
      .catch(error => {
        if (error.response) {
          if (error.response.status === 422) {
            const errors = error.response.data.errors;
            if (errors.username) {
              dispatch({
                type: actionTypes.LOGGING_ERRORS,
                payload: { username: errors.username }
              });
            } else if (errors.password) {
              dispatch({
                type: actionTypes.LOGGING_ERRORS,
                payload: { password: errors.password }
              });
            }
          }
          if (error.response.status === 404) {
            const errors = error.response.data;
            if (errors.notfound) {
              dispatch({
                type: actionTypes.LOGGING_ERRORS,
                payload: { notfound: errors.notfound }
              });
            }
          }
          if (error.response.status === 406) {
            const errors = error.response.data;
            if (errors.blocked) {
              dispatch({
                type: actionTypes.LOGGING_ERRORS,
                payload: { notfound: errors.blocked }
              });
            }
          }
          if (error.response.status === 409) {
            const errors = error.response.data;
            if (errors.pending) {
              dispatch({
                type: actionTypes.LOGGING_ERRORS,
                payload: { notfound: errors.pending }
              });
            }
          }

          setTimeout(() => {
            dispatch({
              type: actionTypes.CLEAR_LOGGING_ERRORS,
              payload: true
            });
          }, 5000);
        }
      })
      .finally(() => {
        dispatch({ type: actionTypes.LOGGING_USER, payload: false });
      });
  });
};

export const handleLoginStatus = () => dispatch => {
  return new Promise(resolve => {
    baseurl.get("api/room_status/login").then(res => {
      console.log(res.data.user);

      dispatch({
        type: actionTypes.FETCH_ROOM_STATUS,
        payload: res.data
      });
      resolve();
    });
  });
};

export const logoutUser = data => dispatch => {
  return new Promise(resolve => {
    baseurl.get("api/logout").then(res => {
      resolve(res);
    });
  });
};
