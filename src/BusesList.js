import './App.css';
import { React, useEffect, useState } from 'react';
import Axios from './axios';
import moment from 'moment';

function calculateArrivalTiming(arrivalTime) {
  const [hour, minutes] = arrivalTime.split(':');
  let schedule = moment()
  schedule.set('hour', hour)
  schedule.set('m', minutes)

  return schedule.fromNow()
}

function formatArrivalTime(arrivalTime) {
  const [hour, minutes] = arrivalTime.split(':');
  let schedule = moment()
  schedule.set('hour', hour)
  schedule.set('m', minutes)

  return schedule.format('h:mm A');
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
        alert('Error Pulling Buses. Try refreshing your browser. If issue still persist, contact administrator.');
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
      <h3>Buses</h3>
      {buses.map(item => (
        <div className="Bus-Stop-Item" key={item.name}>
          <h5>{item.name}</h5>
          <small>Arrival: {formatArrivalTime(item.arrivalTime)}</small> <br />
          <small>{calculateArrivalTiming(item.arrivalTime)}</small>
        </div>
      ))}
    </div>
  )
}
