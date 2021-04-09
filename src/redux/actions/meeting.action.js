import {
  GET_MEETING_DATA_REQUESTED,
  GET_MEETING_DATA_SUCCESS,
  GET_MEETING_DATA_FAILED
} from "../types";

export const getMeetingDataRequest = () => ({
  type: GET_MEETING_DATA_REQUESTED
});

export const getMeetingDataSuccess = (data) => ({
  type: GET_MEETING_DATA_SUCCESS,
  payload: data
});

export const getMeetingDataFailed = (error) => ({
  type: GET_MEETING_DATA_FAILED,
  payload: error
});
