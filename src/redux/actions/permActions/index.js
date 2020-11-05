import * as actionTypes from "../types";
import baseurl from "../../../config/urls/baseurl";

const API = "api/perm-groups/";

export const fetchPermGroups = () => (dispatch) => {
  baseurl.get(API).then((res) => {
    dispatch({
      type: actionTypes.FETCH_PERM_GROUPS,
      payload: res.data,
    });
  });
};

export const showpermgroup = (Id) => (dispatch) => {
  return new Promise((resolve) => {
    baseurl.get(API + Id).then((res) => {
      dispatch({
        type: actionTypes.SHOW_PERM_GROUP,
        payload: res.data,
      });
      resolve();
    });
  });
};

export const updatePermGroup = (data) => (dispatch) => {
  return new Promise((resolve) => {
    baseurl.put(API + data.roleGroupId, data).then((res) => {
      dispatch({
        type: actionTypes.UPDATE_GROUP,
        payload: res.data,
      });
      resolve();
    });
  });
};

// export const destroyGroup = Ids => dispatch => {
//   let dataIds = [];
//   for (var i = 0; i < Ids.length; i++) {
//     dataIds.push(Ids[i].id);
//   }
//   return new Promise(resolve => {
//     baseurl.delete(API + dataIds, dataIds).then(res => {
//       for (let i = 0; i < res.data.length; i++) {
//         const el = res.data[i];
//         dispatch({
//           type: actionTypes.DEL_GROUPS,
//           payload: el
//         });
//       }
//       resolve();
//     });
//   });
// };
