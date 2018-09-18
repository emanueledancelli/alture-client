import { FETCH_EVENTS } from "../actions/types";

const initialState = {
  events: [],
  isLoading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_EVENTS:
      return {
        ...state,
        events: action.payload
      };
    default:
      return state;
  }
}
