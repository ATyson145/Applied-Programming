function ListGroup() {
  let items = ["New York", "San Fran", "Tokyo", "London", "Paris"];
  items = [];

  return (
    <>
      <h1>List</h1>
      {items.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </> //Telling react to use a fragment to contain the children
  );
}

export default ListGroup;
