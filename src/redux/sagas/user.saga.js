import { put, takeEvery } from "redux-saga/effects";

import { GET_USER_REQUESTED } from "../types";
import { getUserSuccess, getUserFailed } from "../actions/user.action";

import api from "../../utils/api";

function* getUser() {
  try {
    const response = yield api.get("/user");
    const user = response.data;
    yield put(getUserSuccess(user));
  } catch (error) {
    yield put(getUserFailed(error));
  }
}

function* userSaga() {
  yield takeEvery(GET_USER_REQUESTED, getUser);
}

export default userSaga;
