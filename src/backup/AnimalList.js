import Animal from "./Animal";

function AnimalList({ allData, addOrder }) {
  return (
    <div className="col-md-9 my-4">
      <h3 className="text-primary text-center border-bottom pb-2">Animals</h3>

      <div className="container-fluid">
        <div className="row">
          {allData.map((animal, i) => (
            <Animal animal={animal} key={i} addOrder={addOrder} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default AnimalList;
