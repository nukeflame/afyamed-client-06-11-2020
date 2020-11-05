import * as actionTypes from "../../actions/types";

const initState = {
  notifications: [],
  unreadNotifications: [],
};

export default function (state = initState, action) {
  switch (action.type) {
    case actionTypes.FETCH_NOTIFICATIONS:
      return {
        ...state,
        notifications: action.payload,
      };

    case actionTypes.CLEAR_NOTIFICATIONS:
      let notf = {};
      if (action.payload) {
        notf = {
          ...state,
          notifications: [],
        };
      }

      return notf;

    case actionTypes.FETCH_UNREAD_NOTIFICATIONS:
      return {
        ...state,
        unreadNotifications: action.payload,
      };

    default:
      return state;
  }
}
