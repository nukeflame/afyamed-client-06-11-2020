import * as actionTypes from "../../actions/types";

const initState = {
  branches: [],
  hospBranchId: 0,
  savingBranch: false,
  BranchErrors: {
    surname: [],
    otherNames: [],
    BranchEmail: [],
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
    case actionTypes.FETCH_HOSP_BRANCHES:
      return {
        ...state,
        branches: action.payload
      };

    case actionTypes.SET_HOSP_BRANCH:
      return {
        ...state,
        hospBranchId: action.payload
      };

    case actionTypes.ADD_BRANCH:
      return {
        ...state,
        data: [action.payload, ...state.data],
        BranchErrors: {
          surname: [],
          otherNames: [],
          BranchEmail: [],
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

    case actionTypes.SAVING_BRANCHES:
      return {
        ...state,
        savingBranch: action.payload
      };

    case actionTypes.BRANCH_ERRORS:
      return {
        ...state,
        BranchErrors: {
          surname: action.payload.surname,
          otherNames: action.payload.other_names,
          BranchEmail: action.payload.Branch_email,
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

    case actionTypes.BRANCH_CLEAR_ERRORS:
      return {
        ...state,
        BranchErrors: {
          surname: [],
          otherNames: [],
          BranchEmail: [],
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
