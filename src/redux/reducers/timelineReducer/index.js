import * as actionTypes from "../../actions/types";

const initState = {
  timeline: []
};

export default function(state = initState, action) {
  switch (action.type) {
    case actionTypes.FETCH_TIMELINE:
      return {
        ...state,
        timeline: action.payload
      };

    case actionTypes.FIND_TIMELINE:
      return {
        ...state,
        timeline: action.payload
      };

    default:
      return state;
  }
}
