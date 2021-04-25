import './App.css';
import React, {Component} from 'react';
import BusStopsList from './BusStopsList';
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h2>Nearest Bus Stops</h2>
          <BusStopsList />
        </header>
    </div>
    );
  }
}


export default App;
