import { SET_STOCKS } from "../actions/stocks";

export default (state = {}, action) => {
  switch (action.type) {
    case SET_STOCKS:
      return {
        ...state,
        ...action.payload.stocks,
      };
    default:
      return state;
  }
}
