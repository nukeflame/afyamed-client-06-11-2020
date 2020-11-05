import * as actionTypes from "../types";
import baseurl from "../../../config/urls/baseurl";

const API = "api/positions/";

export const fetchpositions = () => (dispatch) => {
  return new Promise((resolve) => {
    baseurl.get(API).then((res) => {
      dispatch({
        type: actionTypes.FETCH_POSITIONS,
        payload: res.data,
      });
      resolve(res);
    });
  });
};
