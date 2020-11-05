import * as actionTypes from "../types";
import baseurl from "../../../config/urls/baseurl";

const API = "api/modules/";

export const fetchModules = () => (dispatch) => {
  return new Promise((resolve) => {
    baseurl.get(API).then((res) => {
      dispatch({
        type: actionTypes.FETCH_MODULES,
        payload: res.data,
      });
      resolve(res);
    });
  });
};

export const showmodules = (Id) => (dispatch) => {
  return new Promise((resolve) => {
    baseurl.get(API + Id).then((res) => {
      dispatch({
        type: actionTypes.FIND_MODULES,
        payload: res.data,
      });
      resolve(res);
    });
  });
};
