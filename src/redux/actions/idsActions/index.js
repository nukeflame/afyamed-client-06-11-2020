import * as actionTypes from "../types";
import baseurl from "../../../config/urls/baseurl";

const API = "api/ids/";

export const fetchids = () => (dispatch) => {
  return new Promise((resolve) => {
    baseurl.get(API).then((res) => {
      dispatch({
        type: actionTypes.FETCH_IDS,
        payload: res.data,
      });
      resolve(res);
    });
  });
};
