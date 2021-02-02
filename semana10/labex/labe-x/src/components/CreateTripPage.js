import React from "react";
import {useState, useEffect} from "react";
import axios from 'axios';

export default function CreateTripPage(){

    const { form, onChange, resetState } = useForm({name:"", planet:"", date:"", description:"", durationInDays:""});


    const handleCreate = () => {
        const axiosConfig = {
          headers: {
            Authorization: "carolaine-viana"
          }
        };
    
        const body = {
            name: form.name,
            planet: form.planet,
            date: form.date,
            description: form.description,
            durationInDays: form.durationInDays
        };
    
        axios
          .post(
            "https://us-central1-labenu-apis.cloudfunctions.net/labeX/carolaine-viana/trips",
            body,{
                headers:{
                    Authorization: carolaine-viana
                }
            }
          )
          .then(() => {
            alert(`criado com sucesso!`);
            // this.setState({ name: "", email: "" });
          })
          .catch(error => {
            alert("Erro ao criar o usuário");
          });
      };


  return(
  <div>
      <h1>Criar viagem</h1>
      <input onChange={handleCreate}>Nome da viagem</input>
  </div>
  )
};





