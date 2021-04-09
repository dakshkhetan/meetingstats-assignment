import {
  GET_MEETING_DATA_REQUESTED,
  GET_MEETING_DATA_SUCCESS,
  GET_MEETING_DATA_FAILED
} from "../types";

const initialState = {
  loading: false,
  data: null,
  error: null
};

export default function users(state = initialState, action) {
  switch (action.type) {
    case GET_MEETING_DATA_REQUESTED:
      return {
        ...state,
        loading: true
      };

    case GET_MEETING_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload
      };

    case GET_MEETING_DATA_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload
      };

    default:
      return state;
  }
}
