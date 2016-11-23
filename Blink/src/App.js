import React, { Component } from 'react';
import Header from './components/Header/Header';
import Search from './components/Search/Search';
import DisplayContainer from './components/DisplayContainer/DisplayContainer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <Header />
        </div>

        <Search />

        <DisplayContainer />
      </div>
    );
  }
}

export default App;
