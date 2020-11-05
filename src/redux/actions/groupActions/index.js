import * as actionTypes from "../types";
import baseurl from "../../../config/urls/baseurl";
import Swal from "sweetalert2";

const API = "api/groups/";

export const fetchGroups = () => dispatch => {
  dispatch({ type: actionTypes.FETCHING_GROUPS, payload: true });
  baseurl
    .get(API)
    .then(res => {
      dispatch({
        type: actionTypes.FETCH_GROUPS,
        payload: res.data
      });
    })
    .catch(error => {
      dispatch({
        type: actionTypes.GROUP_ERRORS,
        payload: { fetchErr: error }
      });
    })
    .finally(() => {
      dispatch({ type: actionTypes.FETCHING_GROUPS, payload: false });
    });
};

export const showGroups = Id => dispatch => {
  return new Promise(resolve => {
    baseurl.get(API + Id).then(res => {
      dispatch({
        type: actionTypes.FIND_GROUPS,
        payload: res.data
      });
      resolve(res);
    });
  });
};

export const createGroup = data => dispatch => {
  return new Promise(resolve => {
    dispatch({ type: actionTypes.SAVING_GROUPS, payload: true });
    baseurl
      .post(API, data)
      .then(res => {
        dispatch({
          type: actionTypes.ADD_GROUP,
          payload: res.data
        });

        const Toast = Swal.mixin({
          toast: true,
          position: "top",
          showConfirmButton: false,
          timer: 3000
        });
        Toast.fire({
          type: "success",
          title: "Record saved successffuly!"
        });
        resolve(res);
      })
      .catch(error => {
        if (error.response.status === 422) {
          const errors = error.response.data.errors;
          if (errors.role) {
            dispatch({
              type: actionTypes.GROUP_ERRORS,
              payload: { role: errors.role }
            });
          } else if (errors.slug) {
            dispatch({
              type: actionTypes.GROUP_ERRORS,
              payload: { slug: errors.slug }
            });
          }
        }

        //clear errors
        setTimeout(() => {
          dispatch({
            type: actionTypes.CLEAR_GROUP_ERRORS,
            payload: true
          });
        }, 5000);
      })
      .finally(() => {
        dispatch({ type: actionTypes.SAVING_GROUPS, payload: false });
      });
  });
};

export const updateGroup = data => dispatch => {
  return new Promise(resolve => {
    dispatch({ type: actionTypes.SAVING_GROUPS, payload: true });
    baseurl
      .put(API + data.id, data)
      .then(res => {
        dispatch({
          type: actionTypes.UPDATE_GROUP,
          payload: res.data
        });

        const Toast = Swal.mixin({
          toast: true,
          position: "top",
          showConfirmButton: false,
          timer: 3000
        });
        Toast.fire({
          type: "success",
          title: "Record updated successffuly!"
        });
        resolve(res);
      })
      .catch(() => {
        //clear errors
        setTimeout(() => {
          dispatch({
            type: actionTypes.CLEAR_GROUP_ERRORS,
            payload: true
          });
        }, 5000);
      })
      .finally(() => {
        dispatch({ type: actionTypes.SAVING_GROUPS, payload: true });
      });
  });
};

export const destroyGroup = Ids => dispatch => {
  let dataIds = [];
  for (var i = 0; i < Ids.length; i++) {
    dataIds.push(Ids[i].id);
  }
  return new Promise(resolve => {
    baseurl.delete(API + dataIds).then(res => {
      dispatch({
        type: actionTypes.DEL_GROUP,
        payload: res.data
      });
      resolve();
    });
  });
};
