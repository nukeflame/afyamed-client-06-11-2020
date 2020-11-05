import * as actionTypes from "../types";
import baseurl from "../../../config/urls/baseurl";

const API = "api/documents/";

export const fetchDocuments = () => dispatch => {
  return new Promise((resolve, reject) => {
    baseurl.get(API).then(res => {
      dispatch({
        type: actionTypes.FETCH_DOCUMENTS,
        payload: res.data
      });
      resolve();
    });
  });
};

export const addDocument = data => dispatch => {
  return new Promise(resolve => {
    baseurl.post(API, data).then(res => {
      if (res.data.length > 0) {
        for (let i = 0; i < res.data.length; i++) {
          dispatch({
            type: actionTypes.ADD_DOCUMENT,
            payload: res.data[i]
          });
        }
      }

      resolve();
    });
  });
};

export const findDocument = Id => dispatch => {
  return new Promise(resolve => {
    baseurl.get(API + Id).then(res => {
      dispatch({
        type: actionTypes.FIND_DOCUMENT,
        payload: res.data
      });
      resolve();
    });
  });
};

export const destroyDocument = Id => dispatch => {
  return new Promise(resolve => {
    baseurl.delete(API + Id).then(res => {
      if (res.data.length > 0) {
        for (let i = 0; i < res.data.length; i++) {
          dispatch({
            type: actionTypes.DESTROY_DOCUMENT,
            payload: res.data[i]
          });
        }
      }
      resolve();
    });
  });
};
