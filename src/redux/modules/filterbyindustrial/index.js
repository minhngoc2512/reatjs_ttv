import { LOAD_FILTERBYINDUSTRIAL_SUCCESS } from "./actions";

export default function reducer(state = { data: [] }, action = {}) {
  switch (action.type) {
    case LOAD_FILTERBYINDUSTRIAL_SUCCESS: {
      return { ...state, data: action.payload };
    }
    default:
      return state;
  }
}
