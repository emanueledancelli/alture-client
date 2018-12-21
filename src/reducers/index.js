import { combineReducers } from "redux";
import eventsReducer from "./eventsReducer";
import uiReducer from "./uiReducer";

export default combineReducers({
  events: eventsReducer,
  ui: uiReducer
});
