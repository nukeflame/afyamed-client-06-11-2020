import * as actionTypes from "../../actions/types";

const initState = {
  items: []
};

export default function(state = initState, action) {
  switch (action.type) {
    case actionTypes.FETCH_PATIENT_HISTORY_DATA:
      return {
        ...state,
        items: action.payload
      };

    case actionTypes.UPDATE_PATIENT_DATA:
      return {
        ...state,
        items: [action.payload, ...state.items]
      };

    default:
      return state;
  }
}
