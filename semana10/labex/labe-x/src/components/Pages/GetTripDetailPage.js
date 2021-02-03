import React, { useState, useEffect } from "react";
import axios from "axios";
import { useProtectedPage } from "../Hooks/ProtectedPage";

export const GetTripDetailPage = () => {
  const [trip, setTrip] = useState({});
  useProtectedPage();

  useEffect(() => {
    getTripDetail();
  }, []);

  const getTripDetail = () => {
    axios
      .get(
        "https://us-central1-labenu-apis.cloudfunctions.net/labeX/carolaine-viana/trip/NoIFVcOiSgTKTIPVZwXS",
        {
          headers: {
            auth: localStorage.getItem("token")
          }
        }
      )
      .then((res) => {
        setTrip(res.data.trip);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <h1>Get trip detail</h1>
      <h2>{trip.name}</h2>
      <p>{trip.description}</p>
    </div>
  );
};
