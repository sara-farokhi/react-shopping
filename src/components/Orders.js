import {
  useContext,
  //  useEffect
} from "react";
import ShopContext from "../context/shop/shopContext";

const Orders = () => {
  const { orders, deletOrder, orderBox } = useContext(ShopContext);

  const deletOrderHandler = (box) => {
    deletOrder(box);
  };
  // useEffect(() => {
  //
  // }, []);

  return (
    <div className="col-md-3   border-start my-4">
      <h3 className="text-primary text-center border-bottom pb-2 ">Orders</h3>

      {orderBox.map((box, i) => {
        if (orders.filter((order) => order.name === box).length > 0) {
          return (
            <div className="border-bottom p-3" key={i}>
              <h5> Order Name : {box} </h5>
              <h5>
                numbers: {orders.filter((order) => order.name === box).length}
              </h5>
              <div
                className="btn btn-outline-danger my-3"
                onClick={() => deletOrderHandler(box)}
              >
                <span className="h3">
                  <i className="fa fa-trash" />
                </span>
              </div>
            </div>
          );
        } else {
          return <div key={i}></div>;
        }
      })}

      <h3 className="text-success text-center m-4">
        Total Price:
        {orders.reduce((total, product) => total + product.price, 0)}
      </h3>
    </div>
  );
  // } else {
  //   return (
  //     <div className="col-md-3   border-start my-4">
  //       <h3 className="text-primary text-center border-bottom pb-2 ">Orders</h3>
  //     </div>
  //   );
  // }
};

export default Orders;
