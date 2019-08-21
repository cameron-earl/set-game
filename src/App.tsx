import './App.css';

import React from 'react';

import Game from './components/Game';
import Header from './components/Header';

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <Game />
    </div>
  );
};

export default App;
