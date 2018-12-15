import React, { Component } from 'react';
import './App.css';
import WeatherPage from '../weatherpage/WeatherPage';

class App extends Component {
  render() {
    return (
      <div className="App">
        <WeatherPage />
      </div>
    );
  }
}

export default App;
