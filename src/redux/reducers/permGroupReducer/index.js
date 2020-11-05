import * as actionTypes from "../../actions/types";

const initState = {
  items: [],
  clientPermGroups: []
};

export default function(state = initState, action) {
  switch (action.type) {
    case actionTypes.FETCH_PERM_GROUPS:
      return {
        ...state,
        items: action.payload
      };

    case actionTypes.SHOW_PERM_GROUP:
      return {
        ...state,
        permGroups: action.payload
      };

    default:
      return state;
  }
}
