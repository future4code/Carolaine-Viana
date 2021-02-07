import React, { useState, useEffect } from "react";
import axios from "axios";
import {useHistory} from 'react-router-dom'
// import { useProtectedPage } from "../Hooks/ProtectedPage";
import {url} from '../Bases/Url';
// import {Card} from '../Styled/Styled';
import Button from '@material-ui/core/Button';
import styled from 'styled-components'
import {goToApplyToTrip} from '../Router/Coordinator';
import img2 from '../../imagens/img2.png';
import {Card} from '../Styled/Styled';
import img4 from '../../imagens/img4.png'
// import img5 from '../../imagens/img5.gif'
// import img5 from '../../imagens/img5.gif'

const DivMain = styled.div`
  display: flex;
  flex-direction: column;
  background-color: yellow;
  flex-wrap: wrap;
`

const Caixa = styled.div`
  margin-left: 3vw;
  width: 20vw;
  border-radius: 100%;
`

const DivTeste = styled.img`
margin-bottom: 100px;
padding: 10px;
  width: 200px;
  height: 100px;
  object-fit: cover;
  margin: auto;
  border-radius: 10%;
`


export default function ListTripsPage() {
    const history = useHistory();

    //guardar a viagens em um estado
    const [trip, settrip] = useState([]) //vai ser um objeto vazio inicialmente

   
    const getTrips = () =>{ //funcao que pega minhas viagens
        axios.get(`${url}/trips`, {
        }).then((res) =>{
            settrip(res.data.trips)
            console.log(res.data)
        }).catch((error) =>{
            console.log(error)
        })
    }

    useEffect(()=>{
      getTrips()
    }, [])

  return (
    <div>
      <h1 style={{color: 'white'}}>Lista das viagens</h1>
    <Card>
      <DivTeste src={img4}/>
      {trip.map((t)=>{
          return(
              <Caixa>
                    <p key={t.name}><strong>Nome da viagem: </strong>{t.name}</p>
                    <p key={t.id}>
                        <p>Descricao: {t.description}</p>
                        <p>Data da viagem: {t.date}</p>
                        <p>Duracao da viagem: {t.durationInDays}</p>
                    </p>
                    {/* <p key={t.id}><strong>Descricao da viagem: </strong>{t.description}</p> */}
                    {/* <p><strong>Data da viagem: </strong>{t.date}</p> */}
                    {/* <p><strong>Duracao da viagem: </strong>{t.durationInDays} dias</p> */}
                    <Button onClick={()=> goToApplyToTrip(history)} variant="contained" color="secondary">Inscreva-se</Button>
                  </Caixa>
          )
      })}
              <DivTeste src={img2}/>

    </Card>
    </div>
  )
}
