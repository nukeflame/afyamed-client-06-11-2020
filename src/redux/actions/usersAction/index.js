import * as actionTypes from "../types";
import baseurl from "../../../config/urls/baseurl";

const API = "api/users/";

export const fetchUsers = () => dispatch => {
  return new Promise(resolve => {
    baseurl.get(API).then(res => {
      dispatch({
        type: actionTypes.FETCH_USERS,
        payload: res.data
      });
      resolve(res);
    });
  });
};

export const findUsers = data => dispatch => {
  return new Promise(resolve => {
    baseurl.post(API + "show", data).then(res => {
      dispatch({
        type: actionTypes.FIND_USERS,
        payload: res.data
      });
      resolve(res);
    });
  });
};

export const createUser = data => dispatch => {
  return new Promise(resolve => {
    dispatch({ type: actionTypes.SAVING_USER, payload: true });
    baseurl
      .post(API, data)
      .then(res => {
        dispatch({
          type: actionTypes.ADD_USER,
          payload: res.data
        });
        resolve(res);
      })
      .catch(error => {
        if (error.response) {
          if (error.response.status === 422) {
            const errors = error.response.data.errors;
            if (errors.username) {
              dispatch({
                type: actionTypes.USER_ERRORS,
                payload: { username: errors.username }
              });
            } else if (errors.email) {
              dispatch({
                type: actionTypes.USER_ERRORS,
                payload: { email: errors.email }
              });
            } else if (errors.password) {
              dispatch({
                type: actionTypes.USER_ERRORS,
                payload: { password: errors.password }
              });
            } else if (errors.idNo) {
              dispatch({
                type: actionTypes.USER_ERRORS,
                payload: { idNo: errors.idNo }
              });
            }
          }
        }

        //clear errors
        setTimeout(() => {
          dispatch({
            type: actionTypes.CLEAR_USER_ERRORS,
            payload: true
          });
        }, 5000);
      })
      .finally(() => {
        dispatch({ type: actionTypes.SAVING_USER, payload: false });
      });
  });
};
