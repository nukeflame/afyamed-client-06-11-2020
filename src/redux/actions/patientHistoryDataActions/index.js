import * as actionTypes from "../types";
import baseurl from "../../../config/urls/baseurl";

const API = "api/patient_history/data/";

export const createPatientHistoryData = hospId => dispatch => {
  return new Promise(resolve => {
    baseurl.post(API, hospId).then(res => {
      console.log(res.data);
      // dispatch({
      //   type: actionTypes.UPDATE_PATIENT_DATA,
      //   payload: res.data
      // });
      resolve();
    });
  });
};

export const findPatientHistoryData = patientId => dispatch => {
  return new Promise(resolve => {
    baseurl.get(API + patientId).then(res => {
      dispatch({
        type: actionTypes.FETCH_PATIENT_HISTORY_DATA,
        payload: res.data
      });
      resolve();
    });
  });
};
