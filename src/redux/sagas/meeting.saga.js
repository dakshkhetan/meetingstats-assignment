import { put, takeEvery } from "redux-saga/effects";

import { GET_MEETING_DATA_REQUESTED } from "../types";
import {
  getMeetingDataSuccess,
  getMeetingDataFailed
} from "../actions/meeting.action";

import api from "../../utils/api";

function* getMeetingData() {
  try {
    const response = yield api.get("/meetings");
    const dailyMeetings = response.data.daily;
    yield put(getMeetingDataSuccess(dailyMeetings));
  } catch (error) {
    yield put(getMeetingDataFailed(error));
  }
}

function* meetingSaga() {
  yield takeEvery(GET_MEETING_DATA_REQUESTED, getMeetingData);
}

export default meetingSaga;
