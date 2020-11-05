import * as actionTypes from "../types";
import baseurl from "../../../config/urls/baseurl";

const API = "api/countries/";

export const fetchCountries = () => dispatch => {
  return new Promise(resolve => {
    baseurl.get(API).then(res => {
      dispatch({
        type: actionTypes.FETCH_COUNTRIES,
        payload: res.data
      });
      resolve();
    });
  });
};


