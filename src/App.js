import { useEffect, useState } from "react";
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
      <ExternalUsers></ExternalUsers>
      {/* <Counter></Counter> */}
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

      {/* {books.map((book) => (
        <li>Name: {book}</li>
      ))}
      {books.map((book) => (
        <Person name={book}></Person>
      ))}

      {phones.map((phone) => (
        <Person name={phone.name}></Person>
      ))} */}
      {/* <Person name="khadiza" hobby="Gardening"></Person>
      <Person name="Tania" hobby="Reading"></Person>
      <Person name={books[3]} hobby="Robotics"></Person> */}
      {/* <Person name="BK" hobby="Drawing"></Person>
      <Person name="Bibi KHadiza" hobby="Problem solving"></Person> */}
      {/* <Person name="BIBI" hobby="coding"></Person>
      <Person name="Vetki" hobby="Hiking"></Person>
      <Person name="Baikka" hobby="Photography"></Person>
      <Person name="Pepe" hobby="Travelling"></Person> */}
    </div>
  );
}

function ExternalUsers() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);
  return (
    <div>
      <h1>External Users</h1>
      <p>{users.length}</p>

      {users.map((user) => (
        <User name={user.name} email={user.email}></User>
      ))}
    </div>
  );
}

function User(props) {
  return (
    <div
      style={{
        border: "2px solid black",
        margin: "20px 30%",
        padding: "10px",
        borderRadius: "20px",
      }}
    >
      <h3>Name: {props.name}</h3>
      <p>Email: {props.email}</p>
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

function Counter() {
  const [count, setcount] = useState(0);
  const increaseCount = () => setcount(count + 1);
  const decreaseCount = () => setcount(count - 1);

  return (
    <div>
      <h1>Count: {count} </h1>
      <button onClick={increaseCount}>Increase</button> <br /> <br />
      <button onClick={decreaseCount}>Decrease</button>
    </div>
  );
}
export default App;
