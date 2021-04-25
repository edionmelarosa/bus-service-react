import './App.css';
import { React, Component } from 'react';

class BusStopsList extends Component {
  constructor(props) {
    super(props);
    this.BusStopLists = [
      {
        name: 'Bus Stop 1', 
        location: {
          type: 'Point',
          coordinates: [103.83972077425295, 1.335083707317516] // 216.73
        },
        buses: [
        ]
      },
      {
        name: 'Bus Stop 2', 
        location: {
          type: 'Point',
          coordinates: [103.83770217768149, 1.3355637716640834] // 112.56
        },
        buses: [
        ]
      },
    ];
  }
  render() {
    return (
      <div className="Bus-Stop">
        { this.BusStopLists.map(item => (
          <div className="Bus-Stop-Item" key={item.name}>
            <strong>{item.name}</strong>
          </div>
        ))}
      </div>
    )
  }

}

export default BusStopsList;