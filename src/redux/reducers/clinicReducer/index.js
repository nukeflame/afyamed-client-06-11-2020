import * as actionTypes from "../../actions/types";

const initState = {
  clinics: []
};

export default function(state = initState, action) {
  switch (action.type) {
    case actionTypes.FETCH_CLINICS:
      return {
        ...state,
        clinics: action.payload
      };

    default:
      return state;
  }
}
