import React, { Component } from 'react';
import './App.css';
import DateHeader from './components/DateHeader'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h3>BLUE BOTTLE COFFEE</h3>
        <div class="header"> 
          <DateHeader />
          <h2>Perfectly Ground Work Orders</h2>
          <button>Create Order</button>
        </div>
      </div>
    );
  }
}

export default App;
