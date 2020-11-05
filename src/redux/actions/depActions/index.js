import * as actionTypes from "../types";
import baseurl from "../../../config/urls/baseurl";

const API = "api/departments/";

export const fetchdepartment = () => (dispatch) => {
  return new Promise((resolve) => {
    baseurl.get(API).then((res) => {
      dispatch({
        type: actionTypes.fetchDepartments,
        payload: res.data,
      });
      resolve(res);
    });
  });
};

export const createDepartment = (data) => (dispatch) => {
  return new Promise((resolve) => {
    baseurl
      .post(API, data)
      .then((res) => {
        resolve(res);
      })
      .catch((error) => {
        if (error) {
          const err = error.response.data.errors;
          const errArray = [];

          if (err.surname) {
            errArray.push({ surname: err.surname });
          }
          if (err.othernames) {
            errArray.push({ othernames: err.othernames });
          }
          if (err.phone) {
            errArray.push({ phone: err.phone });
          }
          if (err.email) {
            errArray.push({ email: err.email });
          }

          dispatch({
            type: actionTypes.PATIENT_ERRORS,
            payload: errArray,
          });
        }
      });
  });
};

export const updateDepartment = (formData, id) => (dispatch) => {
  return new Promise((resolve) => {
    baseurl.put(API + id, formData).then((res) => {
      dispatch({
        type: actionTypes.NEW_PATIENT,
        payload: res.dataactionTypes,
      });
      resolve(res);
    });
  });
};

export const destroyDepartment = (Ids) => (dispatch) => {
  return new Promise((resolve) => {
    if (Ids.length > 1) {
      let dataIds = [];
      for (var i = 0; i < Ids.length; i++) {
        dataIds.push(Ids[i].id);
      }

      baseurl.post("/api/delpatients", dataIds).then((res) => {
        dispatch({
          type: actionTypes.DEL_PATIENTS,
          payload: res.data,
        });
        resolve(res);
      });
    } else {
      let id = Ids[0].id;
      baseurl.delete(API + id, id).then((res) => {
        dispatch({
          type: actionTypes.DEL_PATIENT,
          payload: res.data,
        });
        resolve(res);
      });
    }
  });
};
