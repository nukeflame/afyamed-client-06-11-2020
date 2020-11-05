import * as actionTypes from "../types";
import baseurl from "../../../config/urls/baseurl";

const API = "api/clinics/";

export const fetchclinics = () => (dispatch) => {
  return new Promise((resolve) => {
    baseurl.get(API).then((res) => {
      dispatch({
        type: actionTypes.FETCH_CLINICS,
        payload: res.data,
      });
      resolve();
    });
  });
};
