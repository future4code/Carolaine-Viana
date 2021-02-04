import React from "react";
import {useState, useEffect} from "react";
import axios from 'axios';
import {goToHomePage} from "../Router/Coordinator";
import {useHistory} from 'react-router-dom';
import useForm from '../Hooks/useForm';
import Button from '@material-ui/core/Button';
import {goToListTripsPage} from '../Router/Coordinator'

export default function CreateTripPage(){

   const history = useHistory();
   const token = localStorage.getItem("token");
   const date = new Date()
   

  const [form, onChange, clearFields] = useForm({
    name: "",
    planet: "",
    date: "",
    description: "",
    durationInDays: ""
  });

  const requestPost = () =>{
    const body = {
        name: form.name,
        planet: form.planet,
        date: form.date,
        description: form.description,
        durationInDays: form.durationInDays
    };

    axios
    .post(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/carolaine-viana/trips/trips`, body,
    {
        headers:{
             auth: token
        } 
     })
    .then((response) =>{
        // goToListTripsPage(history, true);
        clearFields();
    })
    .catch((error) =>{
        alert(error.message)
    })
};

// const inputChange = (event) =>{
//   const {name, value} = event.target;
//   setform({...form, [name]: value})
// }


const onClickButton = (event) =>{
  event.preventDefault()
  console.log(form)
  clearFields()
}

// useEffect(() =>{
//   if(!localStorage.getItem("token")){
//     goToHomePage(history);
//   }
// })

console.log(form)
 
  return(
  <div>
    <h1>Criar viagem</h1>
      <form onSubmit={onClickButton}>
        <input
        name="name"
        value={form.name}
        onChange={onChange}
        placeholder={"Nome da viagem"}
        required
        pattern={"[.\s\w]{5,}"}
        title={"o nome deve ter no minimo 5 letras"}
        /><br/>
        <select value={form.planet} name="planet" onChange={onChange} placeholder="Digite o planeta" required>
          <option value="">Planeta</option>
          <option value="mercurio">mercurio</option>
          <option value="venus">venus</option>
          <option value="marte">marte</option>
          <option value="Jupiter">Jupiter</option>
          <option value="saturno">saturno</option>
          <option value="urano">urano</option>
          <option value="netuno">netuno</option>
          <option value="plutao">plutao</option>
        </select>
        <input
          name="date"
          value={form.date}
          onChange={onChange}
          placeholder={"Data da viagem"}
          required
        /><br/>
        <input
          name="description"
          value={form.description}
          onChange={onChange}
          placeholder={"Descricao da viagem"}
          required
          pattern={"[.\s\w]{30,}"}
        /><br/>
        <input
          name="durationInDays"
          type="number"
          value={form.durationInDays}
          onChange={onChange}
          placeholder={"Duracao em dias"}
          required
          min="50"
          title={"no minimo 50 dias"}
        /><br/>
      </form>
      <br/>
      <br/>
      <Button variant="contained" color="secundary">Criar viagem</Button><br/><br/>
      <Button variant="contained" color="secundary" onClick={()=>goToListTripsPage(history)}>Ir para página de viagens</Button>
  </div>
  )


};





