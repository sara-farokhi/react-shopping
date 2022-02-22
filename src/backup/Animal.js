const Animal = ({ animal, addOrder }) => {
  return (
    <div className="col-md-6 py-4 ">
      <div className="card p-3 d-flex flex-column anim-wrapper">
        <img src={`${animal.src}`} alt="animal" className="rounded mb-3" />
        <h5>Name : {animal.name} </h5>
        <h5>Price : {animal.price}</h5>
        <div
          className="btn btn-outline-primary"
          onClick={() => addOrder(animal)}
        >
          <span className="h3">
            <i class="fa fa-shopping-cart"></i>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Animal;
