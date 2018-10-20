import React, { Component } from "react";
import logo from "../../logo.svg";
import "./App.scss";

const App = props => {
  const { data } = props;
  return (
    <section>
      {data.freezer.map(item => (
        <article>
          <h2>{item.product_name}</h2>
          <p>{item.quantity}</p>
          <p>{item.expires}</p>
          <p>{`${item.quantity} ${item.size}`}</p>
        </article>
      ))}
    </section>
  );
};

export default App;
