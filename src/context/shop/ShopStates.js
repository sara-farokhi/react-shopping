import { useReducer, useEffect } from "react";
import shopContext from "./shopContext";
import shopReducer from "./shopReducer";
import data from "../../data";
import { DELET_ORDER, ADD_ORDER, FILTER } from "../../types";

const ShopStates = ({ children }) => {
  const initialStates = {
    allData: data,
    filter: [],
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

  // DELETE ORDERS
  const deletOrder = (i) => {
    let newOrderList = [...state.orders];
    newOrderList.splice(i, 1);
    dispatch({ type: DELET_ORDER, payload: newOrderList });
  };

  const dofilter = (current) => {
    dispatch({
      type: FILTER,
      payload: [
        ...state.orders.filter((order) => order.name === current.name),
        current,
      ],
    });
  };

  return (
    <shopContext.Provider
      value={{
        allData: state.allData,
        orders: state.orders,
        filter: state.filter,
        addOrder,
        deletOrder,
        dofilter,
      }}
    >
      {children}
    </shopContext.Provider>
  );
};

export default ShopStates;
