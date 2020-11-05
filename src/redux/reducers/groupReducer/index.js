import * as actionTypes from "../../actions/types";

const initState = {
  items: [],
  findGroups: [],
  savingRoles: false,
  fetchingGroups: false,
  groupErrors: {
    status: false,
    role: [],
    slug: [],
    isActive: true,
    fetchErr: null
  }
};

export default function(state = initState, action) {
  switch (action.type) {
    case actionTypes.FETCH_GROUPS:
      return {
        ...state,
        items: action.payload
      };

    case actionTypes.FIND_GROUPS:
      return {
        ...state,
        findGroups: action.payload
      };

    case actionTypes.SAVING_GROUPS:
      return {
        ...state,
        savingRoles: action.payload
      };

    case actionTypes.FETCHING_GROUPS:
      return {
        ...state,
        fetchingGroups: action.payload
      };

    case actionTypes.ADD_GROUP:
      return {
        ...state,
        findGroups: [...state.findGroups, action.payload]
      };

    case actionTypes.GROUP_ERRORS:
      return {
        ...state,
        groupErrors: {
          status: true,
          role: action.payload.role,
          slug: action.payload.slug
        }
      };

    case actionTypes.UPDATE_GROUP:
      return {
        ...state,
        findGroups: state.findGroups.map(group => {
          if (group.id === action.payload.id) {
            return Object.assign({}, group, action.payload);
          }
          return group;
        })
      };

    case actionTypes.CLEAR_GROUP_ERRORS:
      return {
        ...state,
        groupErrors: action.payload
          ? {
              status: false,
              role: [],
              slug: [],
              isActive: true
            }
          : null
      };

    case actionTypes.DEL_GROUP:
      return {
        ...state,
        findGroups: state.findGroups.filter(
          item => item.id !== action.payload.id
        )
      };

    default:
      return state;
  }
}
