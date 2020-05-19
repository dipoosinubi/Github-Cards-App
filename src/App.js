import React from 'react';
import Header from './components/Header';
import Form from './components/Form';
import CardList from './components/CardList';
import './App.css';
import testData from './testData';


class App extends React.Component {
  state = {
    profiles: testData,
  }
  render() {
    return (
      <div>
        <Header title="The Github Cards App" />
        <Form />
        <CardList profiles={this.state.profiles} />
      </div>

    );
  }
}

export default App;
