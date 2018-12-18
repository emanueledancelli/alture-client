import { SET_FILTER_VALUE } from "./types";

export const setFilter = event => dispatch => {
  dispatch({
    type: SET_FILTER_VALUE,
    payload: event.target.value
  });
};
