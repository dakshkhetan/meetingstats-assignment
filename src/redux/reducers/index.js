import { combineReducers } from "redux";

import meetingReducer from "./meeting.reducer";
import userReducer from "./user.reducer";

export default combineReducers({
  meeting: meetingReducer,
  user: userReducer
});
