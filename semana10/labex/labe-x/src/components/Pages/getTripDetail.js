import React, { useState, useEffect } from "react";
import axios from "axios";
import {useHistory} from 'react-router-dom'
// import { useProtectedPage } from "../Hooks/ProtectedPage";
import Button from '@material-ui/core/Button';
import Candidates from './Candidates';
import {Card} from '../Styled/Styled';
import {goToCreateTrip} from '../Router/Coordinator'

export default function GetTripDetail() {
    const history = useHistory();

    //guardar a viagens em um estado
    const [trip, settrip] = useState([]) //vai ser um objeto vazio inicialmente

    useEffect(()=>{
        const token = localStorage.getItem("token") //ver se ta logada
        // if(!token){
        //     history.push("/login")
        // }

        GetTripDetail()
    }, [history]) //se nao mantem aqui executando

    

    const GetTripDetail = () =>{ //funcao que pega minhas viagens
        axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labeX/carolaine-viana/trips", {
            headers: {
                auth: localStorage.getItem("token")
            }
        }).then((res) =>{
            settrip(res.data.trips)
            console.log(res.data)
        }).catch((error) =>{
            console.log(error)
        })
    }

    useEffect(()=>{
        GetTripDetail()
    }, [])

  return (
      <div>
                <Button onClick={()=>goToCreateTrip(history)} variant="contained" color="secondary">Cadastrar nova viagem</Button><br/><br/>

    <Card>
      <h1>Lista das viagens</h1>

      {trip.map((t)=>{
          return(
              <div>
                    <p><strong>Nome da viagem: </strong>{t.name}</p>
                    <p><strong>Descricao da viagem: </strong>{t.description}</p>
                    <p><strong>Data da viagem: </strong>{t.date}</p>
                    <p><strong>Duracao da viagem: </strong>{t.durationInDays} dias</p>
                    <Button variant="contained" color="primary">Lista de candidatos</Button>
                    <hr/>
                  </div>
          )
      })}
    </Card>
    </div>
  )
}
