import * as actionTypes from "../types";
import baseurl from "../../../config/urls/baseurl";

const API = "api/patient_history/";

export const fetchPatientHisory = hospId => dispatch => {
  return new Promise(resolve => {
    baseurl.post(API, hospId).then(res => {
      dispatch({
        type: actionTypes.FETCH_PATIENT_HISTORIES,
        payload: res.data
      });
      resolve();
    });
  });
};
