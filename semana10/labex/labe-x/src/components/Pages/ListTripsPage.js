import { useRequestData } from '../Hooks/useRequestData';
import {useHistory} from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function ListTripsPage(){
  const history = useHistory()
  const [getTrips, setGetTrips] = useState([])

  const tripList = () =>{
    const request = axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labeX/carolaine-viana/trips")
    .then((responde)=>{
      setGetTrips(responde.data.trips)
      console.log(responde.data.trips)
    })
}

useEffect(()=>{
  tripList()
}, [])

  return (
    <div>
      <h1>todas as viagens</h1>
      {getTrips.map(p=>{
        return(
          <div>
            <p>{p.name}</p>
          </div>
        )
      })}
    </div>
  );
};