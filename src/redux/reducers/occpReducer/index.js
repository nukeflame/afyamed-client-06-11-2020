import * as actionTypes from "../../actions/types";

const initState = {
  data: []
};

export default function(state = initState, action) {
  switch (action.type) {
    case actionTypes.FETCH_OCCUPATIONS:
      return {
        ...state,
        data: action.payload
      };

    default:
      return state;
  }
}
