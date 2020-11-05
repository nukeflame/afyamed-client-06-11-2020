import * as actionTypes from "../types";
import baseurl from "../../../config/urls/baseurl";

const API = "api/room_status/";

export const fetchroomstatus = () => (dispatch) => {
  return new Promise((resolve) => {
    baseurl.get(API).then((res) => {
      dispatch({
        type: actionTypes.FETCH_ROOM_STATUS,
        payload: res.data,
      });
      //check if recently signed out
      if (res.data.signOutAt !== null) {
        dispatch({
          type: actionTypes.DISABLE_ADM,
          payload: true,
        });
      }
      resolve();
    });
  });
};

export const setBranchRoom = (data) => (dispatch) => {
  dispatch({ type: actionTypes.SETTING_BRANCH, payload: true });
  return new Promise((resolve) => {
    baseurl
      .put(API + data.branchId, data)
      .then((res) => {
        dispatch({
          type: actionTypes.FETCH_ROOM_STATUS,
          payload: res.data,
        });
        resolve();
      })
      .finally(() => {
        dispatch({ type: actionTypes.SETTING_BRANCH, payload: false });
      });
  });
};

export const signOutRoom = (data) => (dispatch) => {
  dispatch({
    type: actionTypes.DISABLE_ADM,
    payload: true,
  });
  return new Promise((resolve) => {
    baseurl.put(API + data.userId, data).then((res) => {
      dispatch({
        type: actionTypes.FETCH_ROOM_STATUS,
        payload: res.data,
      });
      resolve();
    });
  });
};

export const signInRoom = (data) => (dispatch) => {
  dispatch({
    type: actionTypes.DISABLE_ADM,
    payload: false,
  });
  return new Promise((resolve) => {
    baseurl.post(API, data).then((res) => {
      //display module room
      dispatch({
        type: actionTypes.DISPLAY_ROOM,
        payload: res.data.room.depName,
      });
      dispatch({
        type: actionTypes.FETCH_ROOM_STATUS,
        payload: res.data,
      });
      resolve(res);
    });
  });
};

export const setRoomStatus = (data) => (dispatch) => {
  return new Promise((resolve) => {
    baseurl.put(API + data.userId, data).then((res) => {
      dispatch({
        type: actionTypes.FETCH_ROOM_STATUS,
        payload: res.data,
      });
      resolve();
    });
  });
};

export const toggleRoom = (data) => (dispatch) => {
  dispatch({
    type: actionTypes.IS_UNAUTHORIZED,
    payload: !data,
  });
};

export const setDisableAdm = () => (dispatch) => {
  dispatch({
    type: actionTypes.DISABLE_ADM,
    payload: true,
  });
};

export const removeDisableAdm = () => (dispatch) => {
  dispatch({
    type: actionTypes.DISABLE_ADM,
    payload: false,
  });
};
