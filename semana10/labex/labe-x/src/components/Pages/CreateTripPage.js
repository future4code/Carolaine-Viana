import React from "react";
import {useState, useEffect} from "react";
import axios from 'axios';
import {goToGetTrips} from "../Router/Coordinator";
import {useHistory} from 'react-router-dom';

export default function CreateTripPage(){

    const [inputName, setinputName] = useState('');
    const [inputPlanet, setinputPlanet] = useState('');
    const [inputDate, setinputDate] = useState('');
    const [inputDescription, setinputDescription] = useState('');
    const [inputDurationInDays, setinputDurationInDays] = useState('')

    const history = useHistory();
    
    // const handleCreate = () => {
    //     const axiosConfig = {
    //       headers: {
    //         Authorization: "carolaine-viana"
    //       }
    //     };
    
    //     const body = {
    //         name: inputName,
    //         planet: inputPlanet,
    //         date: inputDate,
    //         description: inputDescription,
    //         durationInDays: inputDurationInDays
    //     };
    
    //     axios
    //       .post(
    //         "https://us-central1-labenu-apis.cloudfunctions.net/labeX/carolaine-viana/trips",
    //         body,
    //         axiosConfig
    //       )
    //       .then(() => {
    //         alert(`criado com sucesso!`);
    //       })
    //       .catch(error => {
    //         alert("Erro ao criar o usuário");
    //         console.log(error);
    //       });
    //   };

 
  return(
  <div>
      <h1>Criar viagem</h1>
      {/* <input onChange={handleCreate}>Nome da viagem</input> */}
      <p>Nome da viagem: </p>
      <p>Planeta: </p>
      <p>Data da viagem: </p>
      <p>description: </p>
      <p>Duracao: </p>
      <button onClick={() => goToGetTrips(history)}>Voltar</button>
  </div>
  )
};





