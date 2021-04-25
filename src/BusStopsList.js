import './App.css';
import { React, useEffect, useState } from 'react';
import Axios from './axios';
import BusesList from './BusesList';

function ShowBusLists(props) {
  if (!props.bus) {
    return null;
  }

  return (
    <div className="Active-Bus">
      <BusesList bus={props.bus} />
    </div>
  )
}

export default function BusStopsList() {
  const [busStops, setBusStops] = useState([]);
  const [activeBusStop, setActiveBusStop] = useState();

  useEffect(() => {
    async function getBuStops() {
      try {
        const response = await Axios.get('/bus-stops');
        setBusStops(response.data)
      } catch (error) {
        alert('Error Pulling Bus Stops.');
      }
    }

    getBuStops()
  }, [])
  return(
    <div>
      <div className="Bus-Stop">
        { busStops.map(item => (
          <div className="Bus-Stop-Item" key={item._id} onClick={() => setActiveBusStop(item)}>
            <strong>{item.name}</strong>
          </div>
        ))}
      </div>

      <ShowBusLists bus={activeBusStop}/>
    </div>
  ) 
}