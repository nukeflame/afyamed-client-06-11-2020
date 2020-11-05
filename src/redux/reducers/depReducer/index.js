import * as actionTypes from "../../actions/types";

const initState = {
  data: []
};

export default function(state = initState, action) {
  switch (action.type) {
    case actionTypes.fetchDepartments:
      return {
        ...state,
        data: action.payload
      };

    case actionTypes.createDepartments:
      return {
        ...state,
        data: [action.payload, ...state.data]
      };

    case actionTypes.delDepartments:
      return {
        ...state,
        data: state.data.filter(p => p.id !== action.payload.id)
      };

    default:
      return state;
  }
}
