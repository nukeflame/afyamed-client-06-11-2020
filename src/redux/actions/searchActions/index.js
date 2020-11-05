import * as actionTypes from "../types";
import baseurl from "../../../config/urls/baseurl";

const API = "/api/search";

export const fetchSearchDiagnosis = search => dispatch => {
  return new Promise(resolve => {
    baseurl.post(`${API}/diagnosis`, search).then(res => {
      dispatch({
        type: actionTypes.SEARCH_DIAGNOSES,
        payload: res.data
      });
      resolve();
    });
  });
};

export const fetchSearchPatient = search => dispatch => {
  return new Promise(resolve => {
    baseurl.post(`${API}/patients`, search).then(res => {
      dispatch({
        type: actionTypes.SEARCH_PATIENTS,
        payload: res.data
      });
      resolve();
    });
  });
};
