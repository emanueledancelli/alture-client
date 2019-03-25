import { SET_FILTER_VALUE } from "actions/types";
import { SET_SCROLL_VALUE } from "actions/types";

const initialState = {
  selectedValue: "In arrivo",
  selectorValues: ["In arrivo", "Passati"],
  homePageScrollPosition: 0
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_FILTER_VALUE:
      return {
        ...state,
        selectedValue: action.payload
      };
    case SET_SCROLL_VALUE:
      return {
        ...state,
        homePageScrollPosition: action.payload
      };
    default:
      return state;
  }
}
