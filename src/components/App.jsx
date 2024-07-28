
// Création de App

import React, { useState } from 'react';
import Counter from './Counter';


  //  Création de "state" 

    const App = () => {
    const [count, setCount] = useState(0);
  

  //  Création onClickAdd et onClickSubstract 

  const onClickAdd = () => {
    setCount(count + 1);
  };

  const onClickSubstract = () => {
    setCount(count - 1);
  };

  return (
    <div className="app-container">
      <Counter
        count={count}
        onClickAdd={onClickAdd}
        onClickSubstract={onClickSubstract} />
    </div>
  );
}

export default App;
