import React from "react";
import { useRequestData } from './Hooks/useRequestData';

export default function GetTrips(){
  const trips = useRequestData(
    "https://us-central1-labenu-apis.cloudfunctions.net/labeX/carolaine-viana/trips",
    {}
  );

  return (
    <div>
      <h1>Todas as viagens</h1>
      <p>{trips.name}</p>
    </div>
  );
};