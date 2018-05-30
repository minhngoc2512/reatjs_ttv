import { LOAD_TOPINDUSTRIALZONE_SUCCESS } from "./actions";

export default function reducer(state = { data: [] }, action = {}) {
  switch (action.type) {
    case LOAD_TOPINDUSTRIALZONE_SUCCESS: {
      return { ...state, data: action.payload };
    }
    default:
      return state;
  }
}
