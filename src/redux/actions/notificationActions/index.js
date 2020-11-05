import * as actionTypes from "../types";
import baseurl from "../../../config/urls/baseurl";

const API = "api/notifications/";
// let authUser = null;

export const fetchNotifications = () => (dispatch) => {
  return new Promise((resolve, reject) => {
    // dispatch({ type: actionTypes.LOADING_USER, payload: true });
    baseurl
      .get(API)
      .then((res) => {
        dispatch({
          type: actionTypes.FETCH_NOTIFICATIONS,
          payload: res.data,
        });
        resolve();
      })
      .catch((error) => {
        console.log(error);

        // if (error.response) {
        //   if (error.response.status === 401) {
        //     dispatch({
        //       type: actionTypes.IS_UNAUTHORIZED,
        //       payload: true
        //     });
        //   }
        // }
      });
    // .finally(() => {
    //   dispatch({ type: actionTypes.LOADING_USER, payload: false });
    // });
  });
};

export const fetchUnreadNotifications = () => (dispatch) => {
  return new Promise((resolve, reject) => {
    baseurl.get("api/unread_notifications").then((res) => {
      dispatch({
        type: actionTypes.FETCH_UNREAD_NOTIFICATIONS,
        payload: res.data,
      });
      resolve();
    });
  });
};

export const clearNotifications = () => (dispatch) => {
  return new Promise((resolve, reject) => {
    baseurl.get(API + "clear").then((res) => {
      dispatch({
        type: actionTypes.CLEAR_NOTIFICATIONS,
        payload: res.data,
      });
      resolve();
    });
  });
};

export const markNotifications = () => (dispatch) => {
  return new Promise((resolve, reject) => {
    baseurl.get(API + "mark_as_read").then((res) => {
      // dispatch({
      //   type: actionTypes.CLEAR_NOTIFICATIONS,
      //   payload: res.data
      // });
      resolve();
    });
  });
};

export const eventClick = () => (dispatch) => {
  return new Promise((resolve, reject) => {
    baseurl.get(API + "click").then((res) => {
      console.log(res.data);
      // dispatch({
      //   type: actionTypes.CLEAR_NOTIFICATIONS,
      //   payload: res.data
      // });
      resolve();
    });
  });
};
