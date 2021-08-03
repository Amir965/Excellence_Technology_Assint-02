import React, { useEffect, useState } from "react";
import "./App.css";
import List from "./List";

const url = "https://reqres.in/api/users?page=2";

function App() {
  const [todos, setTodos] = useState([]);

  // const fetchData = async () => {
  //   const response = await fetch(url);
  //   const data = await response.json();
  //   setTodos(data.data)
  // }

  console.log(todos);
  useEffect(() => {

    fetch(url)
      .then((response) => response.json())
      .then((data) => setTodos(data.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      <h1 className="top">Users</h1>
      <div className="App">
      {todos.map((items) => {
        return <List key={items.id} {...items} />;
      })}
      </div>
    </div>
  );
}

export default App;
