import { all } from "redux-saga/effects";

import meetingSaga from "./meeting.saga";
import userSaga from "./user.saga";

export default function* rootSaga() {
  yield all([meetingSaga(), userSaga()]);
}
