import * as actionTypes from "../types";
import baseurl from "../../../config/urls/baseurl";

const API = "api/medics/";

export const fetchMedics = () => dispatch => {
  return new Promise((resolve, reject) => {
    baseurl.get(API).then(res => {
      dispatch({
        type: actionTypes.FETCH_MEDICS,
        payload: res.data
      });
      resolve();
    });
  });
};

export const findMedics = Id => dispatch => {
  return new Promise((resolve, reject) => {
    baseurl.get(API + Id).then(res => {
      // dispatch({
      //   type: actionTypes.FETCH_MEDICS,
      //   payload: res.data
      // });
      resolve();
    });
  });
};
