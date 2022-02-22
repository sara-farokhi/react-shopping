import Animal from "./Animal";
import { useContext } from "react";
import ShopContext from "../context/shop/shopContext";

function AnimalList() {
  const shopContext = useContext(ShopContext);
  return (
    <div className="col-md-9 my-4">
      <h3 className="text-primary text-center border-bottom pb-2">Animals</h3>

      <div className="container-fluid">
        <div className="row">
          {shopContext.allData.map((animal, i) => (
            <Animal animal={animal} key={i} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default AnimalList;
