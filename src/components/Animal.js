import ShopContext from "../context/shop/shopContext";
import { useContext } from "react";

const Animal = ({ animal }) => {
  const { addOrder, dofilter, setOrderBox, orderBox } = useContext(ShopContext);

  const handlerOrder = () => {
    dofilter(animal);
    addOrder(animal);
    orderBox.push(animal.name);
    setOrderBox();
  };

  return (
    <div className="col-md-6 py-4 ">
      <div className="card p-3 d-flex flex-column anim-wrapper">
        <img src={`${animal.src}`} alt="animal" className="rounded mb-3" />
        <h5>Name : {animal.name} </h5>
        <h5>Price : {animal.price}</h5>
        <div className="btn btn-outline-primary" onClick={() => handlerOrder()}>
          <span className="h3">
            <i className="fa fa-shopping-cart"></i>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Animal;
