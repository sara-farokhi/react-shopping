import Header from "./components/Header";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.css";
import "./App.css";
import AnimalList from "./components/AnimalList";
import Orders from "./components/Orders";
import ShopStates from "./context/shop/ShopStates";

const App = () => {
  return (
    <ShopStates>
      <div className="app-container container">
        <Header />
        <div className="container-fluid">
          <div className="row">
            <AnimalList />
            <Orders />
          </div>
        </div>
      </div>
    </ShopStates>
  );
};

export default App;
