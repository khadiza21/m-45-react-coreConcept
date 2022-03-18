import "./App.css";

function App() {
  // const number = 222;
  // const book = { name: "Java", price: 234 };
  // const phone = { name: "oppo", price: 23400 };

  // const productStyle = {
  //   color: "red",
  // };
  return (
    <div className="App">
      {/* <h1>JSX</h1>
        <div className="container">
          <h2>I am from BD</h2>
        </div>
        <div className="product">
          <p>Name: {"  " + number}</p>
          <p style={productStyle}>
            Name: {book.name} {book.price}
          </p>
          <p style={{ color: "purple" }}>
            Name: {phone.name} {phone.price}
          </p>
        </div> */}
      <Person></Person>
      <Person></Person>
      <Person></Person>
      <Person></Person>
      <Person></Person>
      <Person></Person>
      <Person></Person>
      <Person></Person>
      <Person></Person>
    </div>
  );
}

function Person() {
  return (
    <div className="person">
      <h1>Bibi Khadiza</h1>
      <p>Student</p>
    </div>
  );
}

export default App;
