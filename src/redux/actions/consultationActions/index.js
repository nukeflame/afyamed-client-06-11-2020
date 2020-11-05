import * as actionTypes from "../types";
import baseurl from "../../../config/urls/baseurl";

const API = "api/consultations/";

export const fetchConsultations = () => dispatch => {
  return new Promise((resolve, reject) => {
    baseurl
      .get(API)
      .then(res => {
        dispatch({
          type: actionTypes.FETCH_CONSULTATIONS,
          payload: res.data
        });
        resolve();
      })
      .catch(error => {
        reject(error);
      });
  });
};

export const createConsultation = data => dispatch => {
  dispatch({ type: actionTypes.SAVING_CONSULTATION, payload: true });
  return new Promise(resolve => {
    baseurl
      .post(API, data)
      .then(res => {
        // console.log(res.data);

        dispatch({
          type: actionTypes.CREATE_CONSULTATION,
          payload: res.data
        });
        resolve();
      })
      .catch(error => {
        if (error.response.status === 422) {
          const errors = error.response.data.errors;
          if (errors.medicId) {
            dispatch({
              type: actionTypes.CONSULTATION_ERRORS,
              payload: { medic: errors.medicId }
            });
          }
          if (errors.title) {
            dispatch({
              type: actionTypes.CONSULTATION_ERRORS,
              payload: { title: errors.title }
            });
          }
        }

        // clear errors
        setTimeout(() => {
          dispatch({ type: actionTypes.CONS_CLEAR_ERRORS, payload: true });
        }, 5000);
      })
      .finally(() => {
        dispatch({ type: actionTypes.SAVING_CONSULTATION, payload: false });
      });
  });
};

export const updatePatient = (formData, id) => dispatch => {
  return new Promise(resolve => {
    baseurl.put(API + id, formData).then(res => {
      dispatch({
        type: actionTypes.NEW_PATIENT,
        payload: res.dataactionTypes
      });
      resolve(res);
    });
  });
};

export const findConsultations = Id => dispatch => {
  dispatch({ type: actionTypes.FIND_CONS_LOADING, payload: true });
  return new Promise(resolve => {
    baseurl
      .get(API + Id)
      .then(res => {
        dispatch({
          type: actionTypes.FIND_CONSULTATIONS,
          payload: res.data
        });
        resolve();
      })
      .finally(() => {
        dispatch({ type: actionTypes.FIND_CONS_LOADING, payload: false });
      });
  });
};

export const destroyConsultation = Id => dispatch => {
  return new Promise(resolve => {
    baseurl.delete(API + Id).then(res => {
      // if (res.data.length > 0) {
      //   for (let i = 0; i < res.data.length; i++) {
      //     dispatch({
      //       type: actionTypes.DESTROY_DOCUMENT,
      //       payload: res.data[i]
      //     });
      //   }
      // }
      resolve();
    });
  });
};
