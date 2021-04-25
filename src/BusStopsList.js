import './App.css';
import { React, useEffect, useState } from 'react';
import Axios from './axios';

export default function BusStopsList() {
  const [BusStops, SetBusStops] = useState([]);

  useEffect(() => {
    async function getBuStops() {
      try {
        const response = await Axios.get('/bus-stops');
        SetBusStops(response.data)
      } catch (error) {
        alert('Error Pulling Bus Stops.');
      }
    }

    getBuStops()
  }, [])
  return(
      <div className="Bus-Stop">
        { BusStops.map(item => (
          <div className="Bus-Stop-Item" key={item._id}>
            <strong>{item.name}</strong>
          </div>
        ))}
      </div>
  ) 
}