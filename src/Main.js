import React from "react";

export default function Main(props) {
  return (
    <div className="main">
      <div className="category">{props.category}</div>
      <img className="main-photo" src={props.img} />
      <div className="main-info">
        <div>
          <span className="name">{props.name}</span>
          <span className="gender">{props.gender}</span>
        </div>

        <div className="adress">{props.adress}</div>
        <span className="number">{props.number}</span>
      </div>
    </div>
  );
}
