import * as actionTypes from "../../actions/types";

const initState = {
  alertMd: false,
  alertInfo: "",
  alertHeader: ""
};

export default function(state = initState, action) {
  switch (action.type) {
    case actionTypes.SUSPEND_ALERT:
      return {
        ...state,
        alertMd: action.payload.alertMd,
        alertInfo: action.payload.alertInfo,
        alertHeader: action.payload.alertHeader
      };

    case actionTypes.BLOCKED_ALERT:
      return {
        ...state,
        alertMd: action.payload.alertMd,
        alertInfo: action.payload.alertInfo,
        alertHeader: action.payload.alertHeader
      };

    default:
      return state;
  }
}
