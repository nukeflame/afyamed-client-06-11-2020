import * as actionTypes from "../../actions/types";

const initState = {
  medics: []
};

export default function(state = initState, action) {
  switch (action.type) {
    case actionTypes.FETCH_MEDICS:
      return {
        ...state,
        medics: action.payload
      };

    default:
      return state;
  }
}
