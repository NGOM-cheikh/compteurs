
// Creation Counter

import React from 'react';
import './Counter.css';

const Counter = ({ count, onClickAdd, onClickSubstract }) => {
  return (
  <div className="counter">
    <h1 className="counter-value">{count}</h1>
    <div className="counter-buttons">
      <button onClick={onClickAdd} className="btn btn-add">+</button>
      <button onClick={onClickSubstract} className="btn btn-substract">-</button>
      </div>
  </div>
  );
}

export default Counter;
