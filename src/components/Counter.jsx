import React from 'react';

const Counter = ({ onClickAdd, onClickSubstract, Count }) => {
  return (
    <div>
      <button onClick={onClickAdd}>+</button>
      <button onClick={onClickSubstract}>-</button>
    </div>
  );
}

export default Counter;
