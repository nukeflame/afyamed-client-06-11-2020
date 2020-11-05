import * as actionTypes from "../../actions/types";

const initState = {
  data: [],
  saveProcessing: false,
  patientErrors: {
    surname: [],
    othernames: [],
    phone: [],
    telephone: [],
    nationality: [],
    email: [],
    idType: [],
    dob: [],
    occupation: [],
    idNo: [],
    refNo: [],
    residence: [],
    town: [],
    postalAddress: [],
    emergRelation: [],
    emergName: [],
    emergContacts: [],
    postalCode: [],
    streetRoad: [],
    loc: []
  },
  patientCharts: [],
  userChartPerms: [],
  currentPatient: null,
  cpStorage: null
};

export default function(state = initState, action) {
  switch (action.type) {
    case actionTypes.FETCH_PATIENTS:
      return {
        ...state,
        data: action.payload
      };

    case actionTypes.NEW_PATIENT:
      return {
        ...state,
        data: [action.payload, ...state.data]
      };

  case actionTypes.UPDATE_PATIENT:
      return {
        ...state,
        data: state.data.map(patient => {
          if (patient.id === action.payload.id) {
            return Object.assign({}, patient, action.payload);
          }
          return patient;
        })
      };

    case actionTypes.LOADING_NEW_PATIENT:
      return {
        ...state,
        saveProcessing: action.payload
      };

    case actionTypes.DEL_PATIENT:
      return {
        ...state,
        data: state.data.filter(p => p.id !== action.payload.id)
      };

    case actionTypes.PATIENT_ERRORS:
      const p = action.payload;
      return {
        ...state,
        patientErrors: {
          surname: p.surname,
          othernames: p.othernames,
          phone: p.phone,
          sex: p.sex,
          dob: p.dob,
          occupation: p.occupation,
          nationality: p.nationality,
          idType: p.idType,
          idNo: p.idNo,
          residence: p.residence,
          town: p.town,
          emergRelation: p.emergRelation,
          emergName: p.emergName,
          emergContacts: p.emergContacts
        }
      };

    case actionTypes.CLEAR_PATIENT_ERRORS:
      return {
        ...state,
        patientErrors: {
          surname: [],
          othernames: [],
          phone: [],
          telephone: [],
          nationality: [],
          email: [],
          idType: [],
          dob: [],
          occupation: [],
          idNo: [],
          refNo: [],
          residence: [],
          town: [],
          postalAddress: [],
          emergRelation: [],
          emergName: [],
          emergContacts: [],
          postalCode: [],
          streetRoad: [],
          loc: []
        }
      };

    case actionTypes.FETCH_CUSTOMIZE:
      return {
        ...state,
        patientCharts: action.payload
      };

    case actionTypes.FIND_CUSTOMIZE:
      return {
        ...state,
        userChartPerms: action.payload
      };

    case actionTypes.SET_CURRENT_PATIENT:
      return {
        ...state,
        currentPatient: action.payload
      };

    case actionTypes.STORAGE_CURRENT_PATIENT:
      return {
        ...state,
        cpStorage: action.payload
      };

    case actionTypes.DEL_CURRENT_PATIENT:
      return {
        ...state,
        cpStorage: action.payload,
        currentPatient: action.payload
      };

    default:
      return state;
  }
}
