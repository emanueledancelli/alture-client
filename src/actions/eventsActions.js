import { FETCH_EVENTS } from "./types";
import $ from "../config";

export const fetchEvents = () => dispatch => {
  $.get("/event").then(res =>
    dispatch({
      type: FETCH_EVENTS,
      payload: res
    }).catch(err => console.log(err))
  );
};
