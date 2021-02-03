import React from "react";
import { useRequestData } from '../Hooks/useRequestData';
import {goToGetTrips} from "../Router/Coordinator";
import {useHistory} from 'react-router-dom';


export default function GetTrips(){
  const history = useHistory();
  const trips = useRequestData(
    "https://us-central1-labenu-apis.cloudfunctions.net/labeX/carolaine-viana/trips",
    {}
  );

  return (
    <div>
      <h1>Todas as viagens</h1>
      <p>{trips.name}</p>
      {/* <button onClick={() => goToGetTrips(history)}>Voltar</button> */}
    </div>
  );
};