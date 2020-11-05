import * as actionTypes from "../../actions/types";

const initState = {
  roomQueues: [],
  queueProcessing: false,
};

export default function (state = initState, action) {
  switch (action.type) {
    case actionTypes.FETCH_QUEUE:
      return {
        ...state,
        roomQueues: action.payload,
      };

    case actionTypes.CREATE_QUEUE:
      return {
        ...state,
        roomQueues: [...state.roomQueues, action.payload],
      };

    case actionTypes.UPDATE_QUEUE:
      return {
        ...state,
        roomQueues: [action.payload, ...state.data],
      };

    case actionTypes.FIND_QUEUE:
      return {
        ...state,
        roomQueues: action.payload,
      };

    case actionTypes.LOADING_QUEUES:
      return {
        ...state,
        queueProcessing: action.payload,
      };

    default:
      return state;
  }
}
