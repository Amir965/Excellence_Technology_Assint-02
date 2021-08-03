import React from "react";
import "./List.css";
const List = ({ id, email, first_name, last_name, avatar }) => {
  return (
    <div className="container">
      <h2>{id}</h2>
      <img className="container_img" src={avatar} alt={first_name} />
      <div className="data">
        <h3>Name: {first_name}</h3>
        <h3>Surname: {last_name}</h3>
        <h3>Email: {email}</h3>
      </div>
    </div>
  );
};

export default List;
