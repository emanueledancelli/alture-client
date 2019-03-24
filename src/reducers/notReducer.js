import { SET_NOTIFICATION_STATUS, SET_RELOAD_STATUS } from "actions/types";

const initialState = {
  permission: "default",
  reload: true
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_NOTIFICATION_STATUS:
      return {
        ...state,
        permission: action.payload
      };
    case SET_RELOAD_STATUS:
      return {
        ...state,
        reload: action.payload
      };
    default:
      return state;
  }
}
