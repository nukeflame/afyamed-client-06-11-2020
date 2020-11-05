import * as actionTypes from "../types";
import baseurl from "../../../config/urls/baseurl";
// import Swal from "sweetalert2";

const API = "api/occupations/";

export const fetchOccupations = () => (dispatch) => {
  return new Promise((resolve) => {
    baseurl.get(API).then((res) => {
      dispatch({
        type: actionTypes.FETCH_OCCUPATIONS,
        payload: res.data,
      });
      resolve();
    });
  });
};
