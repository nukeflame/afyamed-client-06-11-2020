import * as actionTypes from "../../actions/types";

const initState = {
  towns: []
};

export default function(state = initState, action) {
  switch (action.type) {
    case actionTypes.FETCH_TOWNS:
      return {
        ...state,
        towns: action.payload
      };

    default:
      return state;
  }
}
