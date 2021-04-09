import {
  GET_USER_REQUESTED,
  GET_USER_SUCCESS,
  GET_USER_FAILED
} from "../types";

const initialState = {
  loading: false,
  user: null,
  error: null
};

export default function users(state = initialState, action) {
  switch (action.type) {
    case GET_USER_REQUESTED:
      return {
        ...state,
        loading: true
      };

    case GET_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        user: action.payload
      };

    case GET_USER_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload
      };

    default:
      return state;
  }
}
