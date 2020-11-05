import * as actionTypes from "../types";
import baseurl from "../../../config/urls/baseurl";

const API = "api/timeline/";

export const fetchTimeline = () => dispatch => {
  return new Promise(resolve => {
    baseurl.get(API).then(res => {
      dispatch({
        type: actionTypes.FETCH_TIMELINE,
        payload: res.data
      });
      resolve();
    });
  });
};

export const findTimeline = Id => dispatch => {
  return new Promise(resolve => {
    baseurl.get(API + Id).then(res => {
      dispatch({
        type: actionTypes.FIND_TIMELINE,
        payload: res.data
      });
      resolve();
    });
  });
};
