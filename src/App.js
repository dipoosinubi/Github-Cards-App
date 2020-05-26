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
  
  addNewProfile = (profileData) => {
    this.setState(prevState => ({
      profiles: [...prevState.profiles, profileData],
    }));
  }
  render() {
    return (
      <div className = 'container'>
        <React.Fragment>
        <Header title="The Github Cards App" />
        <Form onSubmit = {this.addNewProfile} />
        <CardList profiles={this.state.profiles} />
        </React.Fragment>
      </div>

    );
  }
}

export default App;
