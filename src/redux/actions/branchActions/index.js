import * as actionTypes from "../types";
import baseurl from "../../../config/urls/baseurl";
import Swal from "sweetalert2";

const API = "api/branches/";

export const fetchbranches = (Id) => (dispatch) => {
  return new Promise((resolve) => {
    baseurl.get(API + Id).then((res) => {
      dispatch({
        type: actionTypes.FETCH_HOSP_BRANCHES,
        payload: res.data,
      });
      resolve(res);
    });
  });
};

export const createBranch = (data) => (dispatch) => {
  return new Promise((resolve) => {
    dispatch({ type: actionTypes.SAVING_BRANCHES, payload: true });
    //create Branch
    baseurl
      .post(API, data)
      .then((res) => {
        // dispatch({
        //   type: actionTypes.ADD_HOSPITAL,
        //   payload: res.data
        // });

        // const Toast = Swal.mixin({
        //   toast: true,
        //   position: "top",
        //   showConfirmButton: false,
        //   timer: 5000
        // });
        // Toast.fire({
        //   type: "success",
        //   title: "New Branch record saved!"
        // });
        resolve(res);
      })
      .catch((error) => {
        if (error.response.status === 422) {
          const errors = error.response.data.errors;
          if (errors.surname) {
            dispatch({
              type: actionTypes.BRANCH_ERRORS,
              payload: { surname: errors.surname },
            });
          } else if (errors.other_names) {
            dispatch({
              type: actionTypes.BRANCH_ERRORS,
              payload: { other_names: errors.other_names },
            });
          } else if (errors.id_type) {
            dispatch({
              type: actionTypes.BRANCH_ERRORS,
              payload: { id_type: errors.id_type },
            });
          } else if (errors.id_no) {
            dispatch({
              type: actionTypes.BRANCH_ERRORS,
              payload: { id_no: errors.id_no },
            });
          } else if (errors.Branch_email) {
            dispatch({
              type: actionTypes.BRANCH_ERRORS,
              payload: { Branch_email: errors.Branch_email },
            });
          } else if (errors.password) {
            dispatch({
              type: actionTypes.BRANCH_ERRORS,
              payload: { password: errors.password },
            });
          } else if (errors.phone) {
            dispatch({
              type: actionTypes.BRANCH_ERRORS,
              payload: { phone: errors.phone },
            });
          } else if (errors.hospital_name) {
            dispatch({
              type: actionTypes.BRANCH_ERRORS,
              payload: { hospital_name: errors.hospital_name },
            });
          } else if (errors.hospital_code) {
            dispatch({
              type: actionTypes.BRANCH_ERRORS,
              payload: { hospital_code: errors.hospital_code },
            });
          } else if (errors.telephone) {
            dispatch({
              type: actionTypes.BRANCH_ERRORS,
              payload: { telephone: errors.telephone },
            });
          } else if (errors.hospital_email) {
            dispatch({
              type: actionTypes.BRANCH_ERRORS,
              payload: { hospital_email: errors.hospital_email },
            });
          } else if (errors.address) {
            dispatch({
              type: actionTypes.BRANCH_ERRORS,
              payload: { address: errors.address },
            });
          } else if (errors.location) {
            dispatch({
              type: actionTypes.BRANCH_ERRORS,
              payload: { location: errors.location },
            });
          } else if (errors.role) {
            dispatch({
              type: actionTypes.BRANCH_ERRORS,
              payload: { role: errors.role },
            });
          }
        }

        // clear errors
        setTimeout(() => {
          dispatch({ type: actionTypes.BRANCH_CLEAR_ERRORS, payload: true });
        }, 5000);
      })
      .finally(() => {
        dispatch({ type: actionTypes.SAVING_BRANCHES, payload: false });
      });
  });
};

export const updateBranch = (data) => (dispatch) => {
  return new Promise((resolve) => {
    const BranchInfo = {
      id: data.id,
      userId: data.userId,
      surname: data.surname,
      other_names: data.otherNames,
      Branch_email: data.BranchEmail,
      password: data.password,
      password_confirmation: data.confPswd,
      id_type: data.idType,
      id_no: data.idNo,
      phone: data.phone,
      role: data.role,
      hospital_name: data.hospName,
      hospital_code: data.hospCode,
      hospital_url: data.hospitalUrl,
      address: data.address,
      location: data.location,
      hospital_email: data.hospEmail,
      telephone: data.telephone,
      isActive: data.isActive,
      modulePerms: data.modulePerms,
    };
    //loading Branch
    dispatch({ type: actionTypes.SAVING_BRANCHES, payload: true });
    baseurl
      .put(API + BranchInfo.id, BranchInfo)
      .then((res) => {
        // dispatch({
        //   type: actionTypes.UPDATE_Branch,
        //   payload: res.data
        // });
        // const Toast = Swal.mixin({
        //   toast: true,
        //   position: "top",
        //   showConfirmButton: false,
        //   timer: 5000
        // });
        // Toast.fire({
        //   type: "success",
        //   title: "Branch record updated!"
        // });
        resolve(res);
      })
      .catch((error) => {
        if (error.response.status === 422) {
          const errors = error.response.data.errors;
          if (errors.surname) {
            dispatch({
              type: actionTypes.BRANCH_ERRORS,
              payload: { surname: errors.surname },
            });
          } else if (errors.other_names) {
            dispatch({
              type: actionTypes.BRANCH_ERRORS,
              payload: { other_names: errors.other_names },
            });
          } else if (errors.id_type) {
            dispatch({
              type: actionTypes.BRANCH_ERRORS,
              payload: { id_type: errors.id_type },
            });
          } else if (errors.id_no) {
            dispatch({
              type: actionTypes.BRANCH_ERRORS,
              payload: { id_no: errors.id_no },
            });
          } else if (errors.Branch_email) {
            dispatch({
              type: actionTypes.BRANCH_ERRORS,
              payload: { Branch_email: errors.Branch_email },
            });
          } else if (errors.password) {
            dispatch({
              type: actionTypes.BRANCH_ERRORS,
              payload: { password: errors.password },
            });
          } else if (errors.phone) {
            dispatch({
              type: actionTypes.BRANCH_ERRORS,
              payload: { phone: errors.phone },
            });
          } else if (errors.hospital_name) {
            dispatch({
              type: actionTypes.BRANCH_ERRORS,
              payload: { hospital_name: errors.hospital_name },
            });
          } else if (errors.hospital_code) {
            dispatch({
              type: actionTypes.BRANCH_ERRORS,
              payload: { hospital_code: errors.hospital_code },
            });
          } else if (errors.telephone) {
            dispatch({
              type: actionTypes.BRANCH_ERRORS,
              payload: { telephone: errors.telephone },
            });
          } else if (errors.hospital_email) {
            dispatch({
              type: actionTypes.BRANCH_ERRORS,
              payload: { hospital_email: errors.hospital_email },
            });
          } else if (errors.address) {
            dispatch({
              type: actionTypes.BRANCH_ERRORS,
              payload: { address: errors.address },
            });
          } else if (errors.location) {
            dispatch({
              type: actionTypes.BRANCH_ERRORS,
              payload: { location: errors.location },
            });
          } else if (errors.role) {
            dispatch({
              type: actionTypes.BRANCH_ERRORS,
              payload: { role: errors.role },
            });
          }
        }

        // clear errors
        setTimeout(() => {
          dispatch({ type: actionTypes.BRANCH_CLEAR_ERRORS, payload: true });
        }, 5000);
      })
      .finally(() => {
        dispatch({ type: actionTypes.SAVING_BRANCHES, payload: false });
      });
  });
};

export const destroyBranch = (Ids) => (dispatch) => {
  let dataIds = [];
  for (var i = 0; i < Ids.length; i++) {
    dataIds.push(Ids[i].id);
  }

  return new Promise((resolve) => {
    baseurl.delete(API + dataIds, dataIds).then((res) => {
      for (let i = 0; i < res.data.length; i++) {
        const el = res.data[i];
        dispatch({
          type: actionTypes.DEL_BRANCHES,
          payload: el,
        });
      }

      const Toast = Swal.mixin({
        toast: true,
        position: "top",
        showConfirmButton: false,
        timer: 5000,
      });
      Toast.fire({
        type: "success",
        title: "Branch record(s) deleted!",
      });
      resolve();
    });
  });
};
