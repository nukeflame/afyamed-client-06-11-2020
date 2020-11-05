import * as actionTypes from "../../actions/types";

const initState = {
  data: [],
  hospital: [],
  findingHospital: false,
  selectedHosp: {},
  hospErrors: {
    hospCode: []
  }
};

export default function(state = initState, action) {
  switch (action.type) {
    case actionTypes.FETCH_HOSPITALS:
      return {
        ...state,
        data: action.payload
      };

    case actionTypes.FIND_HOSPITAL:
      return {
        ...state,
        hospital: action.payload
      };

    case actionTypes.ADD_HOSPITAL:
      return {
        ...state,
        data: [action.payload, ...state.data]
      };

    case actionTypes.UPDATE_CLIENT:
      return {
        ...state,
        data: state.data.map(item => {
          if (item.id === action.payload.id) {
            return Object.assign({}, item, action.payload);
          }
          return item;
        })
      };

    case actionTypes.DEL_CLIENTS:
      return {
        ...state,
        data: state.data.filter(item => item.id !== action.payload.id)
      };

    case actionTypes.HOSPITAL_ERRORS:
      return {
        ...state,
        hospErrors: {
          hospCode: action.payload.hospital_code
        }
      };

    case actionTypes.FINDING_HOSPITAL:
      return {
        ...state,
        findingHospital: action.payload
      };

    case actionTypes.SELECTED_HOSP:
      return {
        ...state,
        selectedHosp: action.payload
      };

    default:
      return state;
  }
}
