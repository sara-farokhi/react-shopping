const Orders = ({ orders, deletOrder }) => {
  const deletOrderHandler = (i) => {
    deletOrder(i);
  };
  return (
    <div className="col-md-3   border-start my-4">
      <h3 className="text-primary text-center border-bottom pb-2 ">Orders</h3>
      {orders.map((order, i) => (
        <div className="border-bottom p-3" key={i}>
          <h5> Order Name : {order.name} </h5>
          <h5>Price: {order.price}</h5>
          <div
            className="btn btn-outline-danger my-3"
            onClick={() => deletOrderHandler(i)}
          >
            <span className="h3">
              <i className="fa fa-trash" />
            </span>
          </div>
        </div>
      ))}
      <h3 className="text-success text-center m-4">
        Total Price:
        {orders.reduce((total, product) => total + product.price, 0)}
      </h3>
    </div>
  );
};

export default Orders;
