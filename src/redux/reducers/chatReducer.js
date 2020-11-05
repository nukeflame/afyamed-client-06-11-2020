import { ADD_CHAT_USER, DISPLAY_CHATS, FETCH_CHATS } from "../actions/types";

const initState = {
  myId: "",
  messages: [],
  chatLists: [],
  chatUser: {},
  chatId: {},
  chatUserList: [],
  initChat: false
};

export default function(state = initState, action) {
  switch (action.type) {
    case FETCH_CHATS:
      return {
        ...state,
        chatLists: action.payload
      };

    case DISPLAY_CHATS:
      return {
        ...state,
        messages: action.payload
      };
    case ADD_CHAT_USER:
      return {
        ...state,
        chatUser: action.payload,
        chatId: action.payload.room.id,
        initChat: true
      };
    default:
      return state;
  }
}
