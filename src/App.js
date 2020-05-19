import React from 'react';
import Header from './components/Header';

import CardList from './components/CardList';
import './App.css';

function App() {
  return (
    <div>
      <Header title = "The Github Cards App" />
      <CardList />
    </div>
  
  );
}

export default App;
