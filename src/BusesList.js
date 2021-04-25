import './App.css';
import { React, useEffect, useState } from 'react';
import Axios from './axios';

function calculateArrivalTiming(arrivalTime) {
  return arrivalTime
}

export default function BusesList(props) {
  const [buses, setBuses] = useState([]);

  useEffect(() => {
    let mounted = true;
    async function getBuses() {
      try {
        const response = await Axios.get(`/bus-stops/${props.bus._id}`);
        setBuses(response.data.buses)
      } catch (error) {
        console.log(error)
        alert('Error Pulling Buses.');
      }
    }

    if (mounted) {
      getBuses()
    }

    return () => {
      mounted = false;
    }
  }, [props.bus._id])
  return (
    <div className="Bus-List">
      <h3>Available Buses</h3>
      {buses.map(item => (
        <div className="Bus-Stop-Item" key={item.name}>
          <h5>{item.name}</h5>
          <small>Arrival: {calculateArrivalTiming(item.arrivalTime)} </small>
        </div>
      ))}
    </div>
  )
}
