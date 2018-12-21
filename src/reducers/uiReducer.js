import { SET_FILTER_VALUE } from "actions/types";

const initialState = {
  selectedValue: "In arrivo",
  selectorValues: ["In arrivo", "Passati"]
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_FILTER_VALUE:
      return {
        ...state,
        selectedValue: action.payload
      };
    default:
      return state;
  }
}
