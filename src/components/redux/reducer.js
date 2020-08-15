import { ActionType } from "./action";

const initialState = {
  totalOrder: 0,
};

export const RootReducer = (state = initialState, action) => {
  if (action.type === ActionType.PLUS) {
    return {
      ...state,
      totalOrder: state.totalOrder + 1,
    };
  }

  if (action.type === ActionType.MINUS) {
    if (state.totalOrder > 0) {
      return {
        ...state,
        totalOrder: state.totalOrder - 1,
      };
    }
    return {
      ...state,
      totalOrder: totalOrder,
    };
  }
  return state;
};
