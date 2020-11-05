import * as actionTypes from "../../actions/types";

const initState = {
  diagnoses: [],
  patients: []
};

export default function(state = initState, action) {
  switch (action.type) {
    case actionTypes.SEARCH_DIAGNOSES:
      return {
        ...state,
        diagnoses: action.payload
      };

       case actionTypes.SEARCH_PATIENTS:
      return {
        ...state,
        patients: action.payload
      };



    default:
      return state;
  }
}
