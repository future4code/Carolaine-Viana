import React, { useState } from "react";
import useForm from '../Hooks/useForm'
import axios from "axios";
import {Card} from '../Styled/Styled';

const CreateTripPage = () => {

  const [form, onChange, clearFields] = useForm({
    name: '',
    planet: '',
    date: '',
    description: '',
    durationInDays: '',
  })
  
  const planetList = [
    'Mércurio', 'Vênus', 'Saturno', 'Marte',  'Júpter', 'Urano', 'Netuno', 'Terra'
  ]

  const token = localStorage.getItem('token')

  const createTrip = (event) =>{
    event.preventDefault()
    clearFields()
    axios.post(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/carolaine-viana-epps/trips`, form, {
      headers:{
        auth: token
      }
    })
    .then((res) =>{
      alert('Viagem criada com sucesso')
      console.log(res.data)
    })
    .catch((error) =>{
      alert('Não foi possível criar viagem. Tente novamente.')
    })
  }
  
  return (
    <Card>
      <h2>Criar viagens</h2>
      <form onSubmit={createTrip}>
          <input 
            name='name'
            value={form.name}
            onChange={onChange}
            id='nome'
            placeholder='Nome da viagem'
            type='text'
            pattern="[.\s\w]{5,}"
            title="o nome deve ter no minimo 5 letras"
            required
          />

          <input 
            name='date'
            value={form.date}
            onChange={onChange}
            id='date'
            placeholder="Data da viagem"
            type='date'
            min=''
            required
          />

          <input 
            name='description'
            value={form.description}
            onChange={onChange}
            id='description'
            placeholder="descrição da viagem"
            type='text'
            pattern="[.\s\w]{30,}"
            title="a descricao deve ter no minimo 30 letras"
            required
          />
        
          <input 
            name='durationInDays'
            value={form.durationInDays}
            onChange={onChange}
            id='durationInDays'
            placeholder='duração'
            type='number'
            placeholder="duracao em dias da viagem"
            min="50"
            title="no minimo 50 dias"
            required
          />

          <select
            name='planet'
            value={form.planet}
            onChange={onChange}
            placeholder="escolha o planeta"
            required
          >
            {planetList.map((planet) =>{
              return(
                <option value={planet}>{planet}</option>
              )
            })}
          </select>

          <button type='submit'>Criar</button>
      </form>
      </Card>
  )
}

export default CreateTripPage;




