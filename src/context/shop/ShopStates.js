import { useReducer, useEffect } from "react";
import shopContext from "./shopContext";
import shopReducer from "./shopReducer";
import data from "../../data";
import { DELET_ORDER, ADD_ORDER, FILTER, ORDER_BOX } from "../../types";

const ShopStates = ({ children }) => {
  const initialStates = {
    allData: data,
    filter: [],
    orderBox: localStorage.getItem("orderBox")
      ? JSON.parse(localStorage.getItem("orderBox"))
      : [],

    orders: localStorage.getItem("items")
      ? JSON.parse(localStorage.getItem("items"))
      : [],
    // deletOrder,
  };
  const [state, dispatch] = useReducer(shopReducer, initialStates);

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(state.orders));
  }, [state.orders]);

  // ADD ORDERS

  const addOrder = (product) => {
    const updateOrder = [...state.orders];
    updateOrder.push(product);
    dispatch({ type: ADD_ORDER, payload: updateOrder });
  };

  // DELETE ORDER
  const deletOrder = (box) => {
    let newOrderList = [...state.orders];
    const test = newOrderList.findIndex((el) => el.name === box);
    if (test !== -1) {
      newOrderList.splice(test, 1);
      dispatch({ type: DELET_ORDER, payload: newOrderList });
    }
    if (test === -1) {
    }
  };

  // filter animals

  const dofilter = (current) => {
    dispatch({
      type: FILTER,
      payload: [
        ...state.orders.filter((order) => order.name === current.name),
        current,
      ],
    });
  };

  // SET ORDER BOX

  const setOrderBox = (name) => {
    const tocreateBox = [...new Set(state.orderBox)];
    localStorage.setItem("orderBox", JSON.stringify(tocreateBox));
    dispatch({ type: ORDER_BOX, payload: tocreateBox });
  };

  return (
    <shopContext.Provider
      value={{
        allData: state.allData,
        orders: state.orders,
        filter: state.filter,
        orderBox: state.orderBox,
        addOrder,
        deletOrder,
        dofilter,
        setOrderBox,
      }}
    >
      {children}
    </shopContext.Provider>
  );
};

export default ShopStates;
