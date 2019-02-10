import { combineReducers } from "redux";
import eventsReducer from "./eventsReducer";
import uiReducer from "./uiReducer";
import notReducer from "./notReducer";

export default combineReducers({
  events: eventsReducer,
  ui: uiReducer,
  notifications: notReducer
});
