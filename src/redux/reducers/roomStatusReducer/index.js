import * as actionTypes from "../../actions/types";

const initState = {
  roomStatus: {
    roomName: "",
    branchId: "",
    roomId: "",
    statusId: 2,
    signInAt: "",
    signOutAt: "",
    miniSignOut: false,
    mainBranch: ""
  },
  isUnauth: false,
  disableAdm: false
};

export default function(state = initState, action) {
  switch (action.type) {
    case actionTypes.FETCH_ROOM_STATUS:
      const p = action.payload;
      return {
        ...state,
        roomStatus: {
          branchId: p.branch.id,
          roomId: p.room.id,
          roomName: p.room.depName,
          statusId: p.statusId,
          miniSignOut: p.miniSignOut,
          signInAt: p.signInAt,
          signOutAt: p.signOutAt,
          mainBranch: p.user.staff.mainBranch
        }
      };

    case actionTypes.IS_UNAUTHORIZED:
      return {
        ...state,
        isUnauth: action.payload
      };

    case actionTypes.DISABLE_ADM:
      return {
        ...state,
        disableAdm: action.payload
      };

    default:
      return state;
  }
}
