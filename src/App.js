import React from 'react';
import Header from './components/Header';
import Card from './components/Card';
import CardList from './components/CardList';
import './App.css';

function App() {
  return (
    <div>
      <Header title = "The Github Cards App" />
      <Card />
    </div>
  
  );
}

export default App;
