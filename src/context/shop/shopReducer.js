import { DELET_ORDER, ADD_ORDER, FILTER, ORDER_BOX } from "../../types";

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
    case ORDER_BOX:
      return {
        ...state,
        orderBox: action.payload,
      };

    default:
      return state;
  }
};

export default shopReducer;
