import { SET_NOTIFICATION_STATUS } from "./types";

export const setNotificationStatus = () => dispatch => {
  let status = Notification.permission;
  dispatch({
    type: SET_NOTIFICATION_STATUS,
    payload: status
  });
};
