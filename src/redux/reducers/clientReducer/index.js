import * as actionTypes from "../../actions/types";

const initState = {
  items: [],
  savingClient: false,
  clientErrors: {
    surname: [],
    otherNames: [],
    clientEmail: [],
    password: [],
    idType: [],
    idNo: [],
    phone: [],
    role: [],
    hospName: [],
    hospCode: [],
    hospitalUrl: [],
    address: [],
    location: [],
    hospEmail: [],
    telephone: []
  }
};

export default function(state = initState, action) {
  switch (action.type) {
    case actionTypes.FETCH_CLIENTS:
      return {
        ...state,
        data: action.payload
      };

    case actionTypes.ADD_CLIENT:
      return {
        ...state,
        data: [action.payload, ...state.data],
        clientErrors: {
          surname: [],
          otherNames: [],
          clientEmail: [],
          password: [],
          idType: [],
          idNo: [],
          phone: [],
          role: [],
          hospName: [],
          hospCode: [],
          hospitalUrl: [],
          address: [],
          location: [],
          hospEmail: [],
          telephone: []
        }
      };

    case actionTypes.SAVING_CLIENTS:
      return {
        ...state,
        savingClient: action.payload
      };

    case actionTypes.CLIENT_ERRORS:
      return {
        ...state,
        clientErrors: {
          surname: action.payload.surname,
          otherNames: action.payload.other_names,
          clientEmail: action.payload.client_email,
          password: action.payload.password,
          idType: action.payload.id_type,
          idNo: action.payload.id_no,
          phone: action.payload.phone,
          role: action.payload.role,
          hospName: action.payload.hospital_name,
          hospCode: action.payload.hospital_code,
          hospitalUrl: action.payload.hospital_url,
          address: action.payload.address,
          location: action.payload.location,
          hospEmail: action.payload.hospital_email,
          telephone: action.payload.telephone
        }
      };

    case actionTypes.CLIENT_CLEAR_ERRORS:
      return {
        ...state,
        clientErrors: {
          surname: [],
          otherNames: [],
          clientEmail: [],
          password: [],
          idType: [],
          idNo: [],
          phone: [],
          role: [],
          hospName: [],
          hospCode: [],
          hospitalUrl: [],
          address: [],
          location: [],
          hospEmail: [],
          telephone: []
        }
      };

    default:
      return state;
  }
}
