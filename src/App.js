import React from "react";
import { useState, useEffect } from "react";

import "./App.css";
import List from "./List.js";
import Footer from "./Footer.js";
import FooterInfo from "./FooterInfo";

const initialListItems = ["Learn Javascript", "Learn React", "Have a life!"];

const App = () => {
  const [listItems, setListItems] = useState(initialListItems);
  const [newItem, setNewItem] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    setListItems([...listItems, newItem]);
  };

  const deleteItem = (index) => () =>
    setListItems((listItems) => listItems.filter((_, i) => i !== index));

  useEffect(() => {
    setNewItem("");
  }, [listItems]);

  return (
    <div>
      <section className="todoapp">
        <header className="header">
          <h1>todos</h1>

          <form onSubmit={onSubmit}>
            <input
              className="new-todo"
              placeholder="What needs to be done?"
              value={newItem}
              onChange={(e) => setNewItem(e.target.value)}
              autoFocus
            />
          </form>
        </header>
        <div>
          <List items={listItems} deleteItem={deleteItem} />
        </div>
        <div>
          <Footer items={listItems} />
        </div>
      </section>
      <div>
        <FooterInfo />
      </div>
    </div>
  );
};

export default App;
