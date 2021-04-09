import {
  GET_USER_REQUESTED,
  GET_USER_SUCCESS,
  GET_USER_FAILED
} from "../types";

export const getUserRequest = () => ({
  type: GET_USER_REQUESTED
});

export const getUserSuccess = (user) => ({
  type: GET_USER_SUCCESS,
  payload: user
});

export const getUserFailed = (error) => ({
  type: GET_USER_FAILED,
  payload: error
});
