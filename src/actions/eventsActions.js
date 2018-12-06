import { FETCH_EVENTS_BEGINS, FETCH_EVENTS_SUCCESS, FETCH_EVENTS_FAILURE } from "./types";
import $ from "../config";

export const fetchEvents = () => dispatch => {
  dispatch({ type: FETCH_EVENTS_BEGINS });
  $.get("/eventi")
    .then(res =>
      dispatch({
        type: FETCH_EVENTS_SUCCESS,
        payload: res
      }))
    .catch(err => 
      dispatch({
        type: FETCH_EVENTS_FAILURE,
        payload: err
      }))
};
