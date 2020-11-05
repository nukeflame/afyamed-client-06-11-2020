import * as actionTypes from "../types";
import baseurl from "../../../config/urls/baseurl";

const API = "api/patients/";

export const fetchPatients = () => dispatch => {
  return new Promise(resolve => {
    baseurl.get(API).then(res => {
      dispatch({
        type: actionTypes.FETCH_PATIENTS,
        payload: res.data
      });
      resolve(res);
    });
  });
};

export const createPatient = data => dispatch => {
  return new Promise(resolve => {
    dispatch({ type: actionTypes.LOADING_NEW_PATIENT, payload: true });
    baseurl
      .post(API, data)
      .then(res => {
        dispatch({
          type: actionTypes.NEW_PATIENT,
          payload: res.data
        });
        resolve(res);
      })
      .catch(error => {
        if (error.response) {
          if (error.response.status === 422) {
            const err = error.response.data.errors;
            if (err.surname) {
              dispatch({
                type: actionTypes.PATIENT_ERRORS,
                payload: { surname: err.surname }
              });
            } else if (err.othernames) {
              dispatch({
                type: actionTypes.PATIENT_ERRORS,
                payload: { othernames: err.othernames }
              });
            } else if (err.phone) {
              dispatch({
                type: actionTypes.PATIENT_ERRORS,
                payload: { phone: err.phone }
              });
            } else if (err.sex) {
              dispatch({
                type: actionTypes.PATIENT_ERRORS,
                payload: { sex: err.sex }
              });
            } else if (err.dob) {
              dispatch({
                type: actionTypes.PATIENT_ERRORS,
                payload: { dob: err.dob }
              });
            } else if (err.occupation) {
              dispatch({
                type: actionTypes.PATIENT_ERRORS,
                payload: { occupation: err.occupation }
              });
            } else if (err.nationality) {
              dispatch({
                type: actionTypes.PATIENT_ERRORS,
                payload: { nationality: err.nationality }
              });
            } else if (err.idType) {
              dispatch({
                type: actionTypes.PATIENT_ERRORS,
                payload: { idType: err.idType }
              });
            } else if (err.idNo) {
              dispatch({
                type: actionTypes.PATIENT_ERRORS,
                payload: { idNo: err.idNo }
              });
            } else if (err.residence) {
              dispatch({
                type: actionTypes.PATIENT_ERRORS,
                payload: { residence: err.residence }
              });
            } else if (err.town) {
              dispatch({
                type: actionTypes.PATIENT_ERRORS,
                payload: { town: err.town }
              });
            } else if (err.emergRelation) {
              dispatch({
                type: actionTypes.PATIENT_ERRORS,
                payload: { emergRelation: err.emergRelation }
              });
            } else if (err.emergName) {
              dispatch({
                type: actionTypes.PATIENT_ERRORS,
                payload: { emergName: err.emergName }
              });
            } else if (err.emergContacts) {
              dispatch({
                type: actionTypes.PATIENT_ERRORS,
                payload: { emergContacts: err.emergContacts }
              });
            } else if (err.occupation) {
              dispatch({
                type: actionTypes.PATIENT_ERRORS,
                payload: { occupation: err.occupation }
              });
            } else if (err.nationality) {
              dispatch({
                type: actionTypes.PATIENT_ERRORS,
                payload: { nationality: err.nationality }
              });
            }
          }
        }

        //clear errors
        setTimeout(() => {
          dispatch({
            type: actionTypes.CLEAR_PATIENT_ERRORS,
            payload: true
          });
        }, 5000);
      })
      .finally(() => {
        dispatch({ type: actionTypes.LOADING_NEW_PATIENT, payload: false });
      });
  });
};

export const findPatient = Id => dispatch => {
  return new Promise(resolve => {
    baseurl.get(API + Id).then(res => {
      dispatch({
        type: actionTypes.SET_CURRENT_PATIENT,
        payload: res.data
      });
      resolve(res);
    });
  });
};

export const updatePatient = formData => dispatch => {
  return new Promise(resolve => {
    baseurl.put(API + formData.id, formData).then(res => {
      dispatch({
        type: actionTypes.UPDATE_PATIENT,
        payload: res.data
      });
      resolve(res);
    });
  });
};

export const destroyPatient = Ids => dispatch => {
  return new Promise(resolve => {
      let dataIds = [];
       for (var i = 0; i < Ids.length; i++) {
        dataIds.push(Ids[i].id);
      }    

    baseurl.delete(API + dataIds).then(res => {
        for (var i =0;  i <  res.data.length;  i++){
          const del = res.data[i]
          dispatch({
          type: actionTypes.DEL_PATIENT,
          payload: del
        });
        }
        resolve(res);
      });
  });
};

export const fetchPatientCharts = () => dispatch => {
  return new Promise(resolve => {
    baseurl.get("/api/customize_settings").then(res => {
      dispatch({
        type: actionTypes.FETCH_CUSTOMIZE,
        payload: res.data
      });
      resolve();
    });
  });
};

export const findPatientCharts = Id => dispatch => {
  return new Promise(resolve => {
    baseurl.get(`/api/customize_settings/${Id}`).then(res => {
      dispatch({
        type: actionTypes.FIND_CUSTOMIZE,
        payload: res.data
      });
      resolve();
    });
  });
};

export const setCustomizeChange = data => dispatch => {
  return new Promise(resolve => {
    baseurl.post("api/customize_settings", data).then(res => {
      dispatch({
        type: actionTypes.FIND_CUSTOMIZE,
        payload: res.data
      });
      resolve();
    });
  });
};

export const getCurrentPatient = () => dispatch => {
  return new Promise(resolve => {
    const cp = JSON.parse(localStorage.getItem("cp"));
    if (cp !== null) {
      dispatch({
        type: actionTypes.STORAGE_CURRENT_PATIENT,
        payload: cp
      });
      // insert to current patient
      dispatch({
        type: actionTypes.SET_CURRENT_PATIENT,
        payload: cp
      });
    }
    resolve();
  });
};

export const findConsultations = Id => dispatch => {
  // dispatch({ type: actionTypes.FIND_CONS_LOADING, payload: true });
  // return new Promise(resolve => {
  //   baseurl
  //     .get(API + Id)
  //     .then(res => {
  //       dispatch({
  //         type: actionTypes.FIND_CONSULTATIONS,
  //         payload: res.data
  //       });
  //       resolve();
  //     })
  //     .finally(() => {
  //       dispatch({ type: actionTypes.FIND_CONS_LOADING, payload: false });
  //     });
  // });
};

export const setCurrentPatient = patient => dispatch => {
  return new Promise(resolve => {
    const data = {
      id: patient.id,
      fullname: patient.fullname,
      age: patient.age,
      gender: patient.gender,
      avatar: patient.avatar
    };
    baseurl.get(`api/patient_history/data/${patient.id}`).then(res => {
      dispatch({
        type: actionTypes.FETCH_PATIENT_HISTORY_DATA,
        payload: res.data
      });
    });
    // insert to current patient
    dispatch({
      type: actionTypes.SET_CURRENT_PATIENT,
      payload: patient
    });
    // fetch consultation
    dispatch({ type: actionTypes.FIND_CONS_LOADING, payload: true });
    baseurl
      .get(`api/consultations/${patient.id}`)
      .then(res => {
        dispatch({
          type: actionTypes.FIND_CONSULTATIONS,
          payload: res.data
        });
      })
      .finally(() => {
        dispatch({ type: actionTypes.FIND_CONS_LOADING, payload: false });
      });
    // insert to localStorage
    localStorage.setItem("cp", JSON.stringify(data));
    const cp = JSON.parse(localStorage.getItem("cp"));
    if (cp) {
      dispatch({
        type: actionTypes.STORAGE_CURRENT_PATIENT,
        payload: cp
      });
    }
    resolve();
  });
};

export const delCurrentPatient = Id => dispatch => {
  localStorage.removeItem("cp");
  dispatch({
    type: actionTypes.DEL_CURRENT_PATIENT,
    payload: null
  });
};

// currentPatient(data) {
//   console.log(data);
// }
