import { LOAD_WIDGETS_SUCCESS } from "./actions";

export default function reducer(state = { data: [] }, action = {}) {
  switch (action.types) {
    case LOAD_WIDGETS_SUCCESS: {
      return { ...state, data: action };
    }
    default:
      return state;
  }
}
