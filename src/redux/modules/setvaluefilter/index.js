import { SET_VALUE_FILTER_SUCCESS } from "./actions";

export default function reducer(state = { data: [] }, action = {}) {
  switch (action.type) {
    case SET_VALUE_FILTER_SUCCESS: {
      return { ...state, data: action.payload };
    }
    default:
      return state;
  }
}
