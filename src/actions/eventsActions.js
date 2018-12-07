import { FETCH_EVENTS_BEGINS, FETCH_EVENTS_SUCCESS, FETCH_EVENTS_FAILURE } from "./types";
import { getDate } from "utils";
import orderBy from "lodash/orderBy";
import axios from "config";

export const fetchEvents = () => dispatch => {
  dispatch({ type: FETCH_EVENTS_BEGINS });
  axios.get("/eventi")
    .then(res => {
      let filtered = res.data.filter(e => e.acf.data_inizio >= getDate())
      let ordered = orderBy(filtered, "acf.data_inizio");
      
      dispatch({
        type: FETCH_EVENTS_SUCCESS,
        payload: ordered
      })
    })
    .catch(err => 
      dispatch({
        type: FETCH_EVENTS_FAILURE,
        payload: err
      }))
};
