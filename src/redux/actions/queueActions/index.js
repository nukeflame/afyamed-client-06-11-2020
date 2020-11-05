import * as actionTypes from "../types";
import baseurl from "../../../config/urls/baseurl";

const API = "api/queues/";

export const fetchqueues = () => (dispatch) => {
  return new Promise((resolve) => {
    baseurl.get(API).then((res) => {
      dispatch({
        type: actionTypes.FETCH_QUEUE,
        payload: res.data,
      });
      resolve(res);
    });
  });
};

export const findQueues = (roomId) => (dispatch) => {
  return new Promise((resolve) => {
    baseurl.get(API + roomId).then((res) => {
      dispatch({
        type: actionTypes.FIND_QUEUE,
        payload: res.data,
      });
      resolve(res);
    });
  });
};

export const createQueue = (data) => (dispatch) => {
  dispatch({ type: actionTypes.LOADING_QUEUES, payload: true });
  return new Promise((resolve) => {
    baseurl
      .post(API, data)
      .then((res) => {
        dispatch({
          type: actionTypes.CREATE_QUEUE,
          payload: res.data,
        });
        resolve(res);
      })
      .finally(() => {
        dispatch({ type: actionTypes.LOADING_QUEUES, payload: false });
      });
  });
};

export const updateQueue = (formData, id) => (dispatch) => {
  return new Promise((resolve) => {
    baseurl.put(API + id, formData).then((res) => {
      dispatch({
        type: actionTypes.NEW_PATIENT,
        payload: res.dataactionTypes,
      });
      resolve(res);
    });
  });
};

export const destroyQueue = (Ids) => (dispatch) => {
  return new Promise((resolve) => {
    if (Ids.length > 1) {
      let dataIds = [];
      for (var i = 0; i < Ids.length; i++) {
        dataIds.push(Ids[i].id);
      }

      baseurl.post("/api/delpatients", dataIds).then((res) => {
        dispatch({
          type: actionTypes.DEL_PATIENTS,
          payload: res.data,
        });
        resolve(res);
      });
    } else {
      let id = Ids[0].id;
      baseurl.delete(API + id, id).then((res) => {
        dispatch({
          type: actionTypes.DEL_PATIENT,
          payload: res.data,
        });
        resolve(res);
      });
    }
  });
};
