    // Création de l'App Compteurs ou "count"

import React, { useState } from 'react';
import Counter from './Counter';

const App = () => {

  // Création un state nommé "count" dans App.jsx

  const [count, setCount] = useState(0);

  // Création de gestionnaires d'événement onClickAdd et onClickSubstract dans App

  const onClickAdd = () => {
    setCount(count + 1);
  };

  const onClickSubstract = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <h1>Compteur: {count}</h1>
      <Counter onClickAdd={onClickAdd} onClickSubstract={onClickSubstract} />
    </div>
  );
}

export default App;
