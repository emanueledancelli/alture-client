import { SET_NOTIFICATION_STATUS } from "actions/types";

const initialState = {
  permission: "default"
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_NOTIFICATION_STATUS:
      return {
        ...state,
        permission: action.payload
      };
    default:
      return state;
  }
}
