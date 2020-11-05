import * as actionTypes from "../../actions/types";

const initState = {
  documents: [],
  findDocuments: []
};

export default function(state = initState, action) {
  switch (action.type) {
    case actionTypes.FETCH_DOCUMENTS:
      return {
        ...state,
        documents: action.payload
      };

    case actionTypes.FIND_DOCUMENT:
      return {
        ...state,
        findDocuments: action.payload
      };

    case actionTypes.ADD_DOCUMENT:
      return {
        ...state,
        findDocuments: [...state.findDocuments, action.payload]
      };

    case actionTypes.DESTROY_DOCUMENT:
      return {
        ...state,
        findDocuments: state.findDocuments.filter(
          d => d.id !== action.payload.id
        )
      };

    default:
      return state;
  }
}
