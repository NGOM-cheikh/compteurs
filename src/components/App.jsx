  // Creation de l'App

  import React, { useState } from 'react';
import Counter from './Counter';

  const App = () => {
    // Création d'un state qui s'appellera "count" 
    const [count, setCount] = useState(0);

    // Création des gestionnaires d'événement onClickAdd & onClickSubstract 

    const onClickAdd = () => {
      setCount(count + 1);
    };

    const onClickSubstract = () => {
      setCount(count - 1);
    };

    return (
      <div>
        <h1>Counter: {count}</h1>
        <Counter onClickAdd={onClickAdd} onClickSubstract={onClickSubstract} />
      </div>
    );
  };

  export default App;
