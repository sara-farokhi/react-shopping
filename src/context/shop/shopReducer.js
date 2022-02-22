import { DELET_ORDER, ADD_ORDER, FILTER } from "../../types";

const shopReducer = (state, action) => {
  switch (action.type) {
    case ADD_ORDER:
      return { ...state, orders: action.payload };

    case DELET_ORDER:
      return { ...state, orders: action.payload };
    case FILTER:
      return {
        ...state,
        filter: action.payload,
      };

    default:
      return state;
  }
};

export default shopReducer;
