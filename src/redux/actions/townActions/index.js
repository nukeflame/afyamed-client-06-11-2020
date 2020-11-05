import * as actionTypes from "../types";
import baseurl from "../../../config/urls/baseurl";


const API = "api/towns/";

export const fetchTowns = () => dispatch => {
  return new Promise(resolve => {
    baseurl.get(API).then(res => {
      dispatch({
        type: actionTypes.FETCH_TOWNS,
        payload: res.data
      });
      resolve();
    });
  });
};


