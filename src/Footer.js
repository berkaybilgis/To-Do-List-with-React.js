import React from "react";
import { useState, useEffect } from "react";

const Footer = ({ items }) => {
  const [counter, setCounter] = useState(items.length);

  useEffect(() => {
    setCounter(items.length);
  }, [items.length]);

  return (
    <div>
      <footer className="footer">
        <span className="todo-count">
          <strong>{counter} items left</strong>
        </span>

        <ul className="filters">
          <li>
            <a className="selected">All</a>
          </li>
          <li>
            <a>Active</a>
          </li>
          <li>
            <a>Completed</a>
          </li>
        </ul>

        <button className="clear-completed">Clear completed</button>
      </footer>
    </div>
  );
};

export default Footer;
