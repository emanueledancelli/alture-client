import { 
  FETCH_EVENTS_BEGINS, 
  FETCH_EVENTS_SUCCESS, 
  FETCH_EVENTS_FAILURE, 
  GET_SINGLE_EVENT, 
  CLEAN_SINGLE_EVENT } from "actions/types";

const initialState = {
  isLoading: false,
  isFetched: false,
  data: [],
  error: null,
  single: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_EVENTS_BEGINS:
      return {
        ...state,
        isLoading: true
      };
    case FETCH_EVENTS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isFetched: true,
        data: action.payload
      };
    case FETCH_EVENTS_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload.message
      }
    case GET_SINGLE_EVENT:
      return {
        ...state,
        single: action.payload
      }
    case CLEAN_SINGLE_EVENT:
      return {
        ...state,
        single: null
      }
    default:
      return state;
  }
}
