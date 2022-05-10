import React from "react";
import "./App.css";

const List = ({ items, deleteItem }) => {
  return (
    <section className="main">
      <ul className="todo-list">
        {items.map((item, i) => {
          return (
            <li className="list-item" key={i}>
              <div className="view">
                <input className="toggle" type="checkbox" />
                <label>{item}</label>
                <button className="destroy" onClick={deleteItem(i)}></button>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default List;
