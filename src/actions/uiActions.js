import { SET_FILTER_VALUE, SET_SCROLL_VALUE } from "./types";

export const setFilter = event => dispatch => {
  dispatch({
    type: SET_FILTER_VALUE,
    payload: event.target.value
  });
};

export const setScrollValue = scrollX => dispatch => {
  dispatch({
    type: SET_SCROLL_VALUE,
    payload: scrollX
  });
};
