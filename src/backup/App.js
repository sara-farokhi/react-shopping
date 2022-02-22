import { useState, useEffect } from "react";

import Header from "./components/Header";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.css";
import "./App.css";
import AnimalList from "./components/AnimalList";
import Orders from "./components/Orders";

import data from "./data";

const App = () => {
  const [allData, setData] = useState(data);
  const [test, setTest] = useState(1);
  const [orders, setOrdes] = useState(
    localStorage.getItem("items")
      ? JSON.parse(localStorage.getItem("items"))
      : []
  );

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(orders));
    localStorage.setItem("test", JSON.stringify(test));
  }, [orders, test]);
  // setData(data);

  let i = 0;

  const addOrder = (product) => {
    const updateOrder = [...orders];
    updateOrder.push(product);
    setOrdes(updateOrder);
    i++;
    setTest(i + test);
    // localStorage.setItem("items", JSON.stringify(updateOrder));
  };
  const deletOrder = (i) => {
    let newOrderList = [...orders];
    newOrderList.splice(i, 1);
    setOrdes(newOrderList);
  };

  return (
    <div>
      <div className="app-container container">
        <Header />

        <div className="container-fluid">
          <div className="row">
            <AnimalList allData={allData} addOrder={addOrder} />
            <Orders orders={orders} deletOrder={deletOrder} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
