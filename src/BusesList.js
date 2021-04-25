import './App.css';
import { React, Component } from 'react';

class BusesList extends Component {
  render() {
    return (
      <div className="Bus-List">
        {this.props.buses.map(item => (
          <div className="Bus-Item" key={item.name}>
            <h5>{item.name}</h5>
            <small>Arrival: <strong>{this.calculateArrivalTiming('10mins')}</strong> </small>
          </div>
        ))}
      </div>
    )
  }

  calculateArrivalTiming(time) {
    return time;
  }
}

export default BusesList;