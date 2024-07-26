
// Creation Count

import React from 'react';

const Counter = ({ onClickAdd, onClickSubstract }) => {
  return (
    <div>
      <button onClick={onClickAdd}>+</button>
      <button onClick={onClickSubstract}>-</button>
    </div>
  );
};

export default Counter;
