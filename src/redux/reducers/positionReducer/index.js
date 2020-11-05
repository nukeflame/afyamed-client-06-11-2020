import * as actionTypes from "../../actions/types";

const initState = {
  items: []
};

export default function(state = initState, action) {
  switch (action.type) {
    case actionTypes.FETCH_POSITIONS:
      return {
        ...state,
        items: action.payload
      };

    default:
      return state;
  }
}
