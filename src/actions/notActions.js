import { SET_NOTIFICATION_STATUS, SET_RELOAD_STATUS } from "./types";

export const setNotificationStatus = () => dispatch => {
  let status = Notification.permission;
  dispatch({
    type: SET_NOTIFICATION_STATUS,
    payload: status
  });
};

export const setReloadStatus = ac => dispatch => {
  dispatch({
    type: SET_RELOAD_STATUS,
    payload: ac
  });
};
