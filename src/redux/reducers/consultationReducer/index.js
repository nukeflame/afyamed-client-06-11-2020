import * as actionTypes from "../../actions/types";

const initState = {
  consultatation: [],
  visits: [],
  findConsLoading: false,
  savingConsultation: false,
  consultationErrors: {
    medic: [],
    title: []
  }
};

export default function(state = initState, action) {
  switch (action.type) {
    case actionTypes.FETCH_CONSULTATIONS:
      return {
        ...state,
        consultatation: action.payload
      };

    case actionTypes.FIND_CONSULTATIONS:
      return {
        ...state,
        visits: action.payload
      };

    case actionTypes.CREATE_CONSULTATION:
      return {
        ...state,
        visits: [action.payload, ...state.visits]
      };

    case actionTypes.FIND_CONS_LOADING:
      return {
        ...state,
        findConsLoading: action.payload
      };

    case actionTypes.SAVING_CONSULTATION:
      return {
        ...state,
        savingConsultation: action.payload
      };

    case actionTypes.CONSULTATION_ERRORS:
      return {
        ...state,
        consultationErrors: {
          medic: action.payload.medic,
          title: action.payload.title
        }
      };

    case actionTypes.CONS_CLEAR_ERRORS:
      return {
        ...state,
        consultationErrors: {
          medic: [],
          title: []
        }
      };

    default:
      return state;
  }
}
