import * as actionTypes from "../types";
import baseurl from "../../../config/urls/baseurl";
import Noty from "noty";

const API = "api/user/";
let authUser = null;

export const fetchuser = () => (dispatch) => {
  return new Promise((resolve) => {
    dispatch({ type: actionTypes.LOADING_USER, payload: true });
    baseurl
      .get(API)
      .then((res) => {
        const data = res.data;
        authUser = data;
        //alert
        if (data.isActive === 0) {
          const alertData = {
            alertMd: true,
            alertHeader: "Blocked",
            alertInfo: "Your account has been Blocked! Contact Administrator. ",
          };
          dispatch({
            type: actionTypes.BLOCKED_ALERT,
            payload: alertData,
          });
        } else if (data.isActive === 1) {
          const alertData = {
            alertMd: true,
            alertHeader: "Suspended",
            alertInfo:
              "Your account has been Suspended! Contact Administrator. ",
          };
          dispatch({
            type: actionTypes.SUSPEND_ALERT,
            payload: alertData,
          });
        } else if (data.miniSignOut) {
          dispatch({
            type: actionTypes.IS_UNAUTHORIZED,
            payload: true,
          });
        }
        //auth user
        dispatch({
          type: actionTypes.AUTH_USER,
          payload: data,
        });
        //set user branch
        dispatch({
          type: actionTypes.SET_HOSP_BRANCH,
          payload: data.hospBranchId,
        });
        resolve();
      })
      .catch((error) => {
        if (error.response) {
          if (error.response.status === 401) {
            dispatch({
              type: actionTypes.IS_UNAUTHORIZED,
              payload: true,
            });
          }
        } else {
          new Noty({
            text: "Connection error, Check internet",
            layout: "topRight",
            type: "error",
            theme: "metroui",
            timeout: 2500,
          }).show();
        }
      })
      .finally(() => {
        dispatch({ type: actionTypes.LOADING_USER, payload: false });
      });
  });
};

export const checkUserPwd = (data) => (dispatch) => {
  return new Promise((resolve) => {
    dispatch({ type: actionTypes.CHECKING_USER_PWD, payload: true });
    baseurl
      .post("api/check_password/", data)
      .then((res) => {
        if (res.data.result) {
          dispatch({
            type: actionTypes.CHECK_USER_PWD,
            payload: res.data.result,
          });
          resolve();
        } else {
          dispatch({
            type: actionTypes.CHECK_USER_PWD,
            payload: res.data.result,
          });
        }
      })
      .catch((error) => {
        if (error.response.status === 422) {
          const errors = error.response.data;
          if (errors.error) {
            dispatch({
              type: actionTypes.CHECK_PWD_ERRORS,
              payload: errors.error,
            });
            //clear errors
            setTimeout(() => {
              dispatch({
                type: actionTypes.CLEAR_CHECK_PWD_ERRORS,
                payload: true,
              });
            }, 5000);
          }
        }
      })
      .finally(() => {
        dispatch({ type: actionTypes.CHECKING_USER_PWD, payload: false });
      });
  });
};

export const handleUserLevel = (data) => (dispatch) => {
  return new Promise((resolve) => {
    baseurl.put(API + data.id, data).then((res) => {
      dispatch({
        type: actionTypes.UPDATE_USER,
        payload: res.data,
      });
      resolve();
    });
  });
};

export const handleUserActiveStatus = (data) => (dispatch) => {
  return new Promise((resolve) => {
    baseurl.put(API + data.id, data).then((res) => {
      const user = res.data;
      //alert
      if (authUser.id === user.id) {
        if (user.isActive === 0) {
          const alertData = {
            alertMd: true,
            alertHeader: "Blocked",
            alertInfo: "Your account has been Blocked! Contact Administrator. ",
          };
          dispatch({
            type: actionTypes.BLOCKED_ALERT,
            payload: alertData,
          });
        } else if (user.isActive === 1) {
          const alertData = {
            alertMd: true,
            alertHeader: "Suspended",
            alertInfo:
              "Your account has been Suspended! Contact Administrator. ",
          };
          dispatch({
            type: actionTypes.SUSPEND_ALERT,
            payload: alertData,
          });
        }
      }
      dispatch({
        type: actionTypes.UPDATE_USER,
        payload: user,
      });
      resolve();
    });
  });
};

export const getUserNo = () => (dispatch) => {
  return new Promise((resolve, reject) => {
    dispatch({
      type: actionTypes.USER_NO_LOAD,
      payload: true,
    });
    baseurl
      .get("api/user/uniqueNo")
      .then((res) => {
        dispatch({
          type: actionTypes.USER_NO,
          payload: res.data,
        });
        resolve();
      })

      .finally(() => {
        dispatch({
          type: actionTypes.USER_NO_LOAD,
          payload: false,
        });
      });
  });
};
