import * as actionTypes from "../types";
import baseurl from "../../../config/urls/baseurl";

const API = "api/patient_history_values/";

export const fetchHistoryValues = hosp => dispatch => {
  return new Promise(resolve => {
    dispatch({ type: actionTypes.LOADING_PATIENT_VALUES, payload: true });
    baseurl
      .post(API, hosp)
      .then(res => {
        dispatch({
          type: actionTypes.FETCH_PATIENT_HISTORIES_VALUES,
          payload: res.data
        });
        resolve();
      })
      .finally(() => {
        dispatch({ type: actionTypes.LOADING_PATIENT_VALUES, payload: false });
      });
  });
};
