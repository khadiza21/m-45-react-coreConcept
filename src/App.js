import "./App.css";

// const number = 222;
// const book = { name: "Java", price: 234 };
const phones = [
  { name: "oppo", price: 12400 },
  { name: "shaowmi", price: 21400 },
  { name: "realme", price: 13400 },
  { name: "nokiya", price: 1400 },
  { name: "samsaung", price: 23400 },
  { name: "huwaei", price: 6400 },
];

// const productStyle = {
//   color: "red",
// };

function App() {
  const books = ["algorithm", "cpp", "c", "python", "data strcture", "java"];
  return (
    <div className="App">
      <Counter></Counter>
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

      {books.map((book) => (
        <li>Name: {book}</li>
      ))}
      {books.map((book) => (
        <Person name={book}></Person>
      ))}

      {phones.map((phone) => (
        <Person name={phone.name}></Person>
      ))}
      <Person name="khadiza" hobby="Gardening"></Person>
      <Person name="Tania" hobby="Reading"></Person>
      <Person name={books[3]} hobby="Robotics"></Person>
      {/* <Person name="BK" hobby="Drawing"></Person>
      <Person name="Bibi KHadiza" hobby="Problem solving"></Person> */}
      {/* <Person name="BIBI" hobby="coding"></Person>
      <Person name="Vetki" hobby="Hiking"></Person>
      <Person name="Baikka" hobby="Photography"></Person>
      <Person name="Pepe" hobby="Travelling"></Person> */}
    </div>
  );
}

function Person(props) {
  console.log(props);
  return (
    <div className="person">
      <h1>{props.name}</h1>
      <p>Hobby: {props.hobby}</p>
    </div>
  );
}

function Counter(){
  return(
    <div>
      <h1>Count: </h1>
      <button>Increase</button>
    </div>
  )
}
export default App;
