import { ADD_TO_FAVORITE, REMOVE_FROM_FAVORITE } from "../actions/favorite";

export default function favorite(state = [], action) {
  switch (action.type) {
    case ADD_TO_FAVORITE:
      return [...state, action.payload];

    case REMOVE_FROM_FAVORITE:
      return state.filter(({ id }) => id !== action.payload.id);

    default:
      return state;
  }
}
