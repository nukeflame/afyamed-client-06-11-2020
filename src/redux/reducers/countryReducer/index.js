import * as actionTypes from "../../actions/types";

const initState = {
  countries: []
};

export default function(state = initState, action) {
  switch (action.type) {
    case actionTypes.FETCH_COUNTRIES:
      return {
        ...state,
        countries: action.payload
      };

    default:
      return state;
  }
}
