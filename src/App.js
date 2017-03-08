import React, { Component } from 'react';
import './App.css';
import Calculator from './Calculator';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1>Calculator Page</h1>
        </div>
        <Calculator />
      </div>
    );
  }
}
