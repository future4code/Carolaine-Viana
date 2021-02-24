import React, { useEffect, useState } from "react";
import axios from 'axios';
import { useHistory } from "react-router-dom"; //manipula o fluxo de telas
import {Card, subDiv, InputDesign, Title} from '../Styled/Styled';
import Button from '@material-ui/core/Button';
import {goToGetTripDetail} from '../Router/Coordinator';
import TextField from '@material-ui/core/TextField';


export default function LoginPage() {
  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')
  const history = useHistory()

  const handleEmail = (event) =>{
      setemail(event.target.value)
      // setemail('') //limpar o campo
  }

  const handlePassword = (event) => {
      setpassword(event.target.value)
      // setpassword('') //limpar o campo
  }

  useEffect(()=>{ //persistir o login
    const token = localStorage.getItem("token") //pegar o login dela
    console.log(token)

    if(token===null){ //se existir um token
      history.push("/login")
    }
    else if(token===!null){
      history.push("/trips/detail")
    }

  }, [history])

const login = () =>{
  const body = {
    email: email,
    password: password
  }

  axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labeX/carolaine-viana/login", body)
  .then((resposta)=>{
    console.log(resposta.data)
    history.push('/trips/detail')
    localStorage.setItem("token", resposta.data.token) //guardar o login (token)
  }).catch(()=>{
    console.log('nao foi')
  })
}


  return(
    <Card>
      {/* <h1>Logar como administrador</h1> */}
      <subDiv>
        <h2>E-mail: </h2>
      <InputDesign label="E-mail" value={email} placeholder="digite o e-mail" onChange={handleEmail}/>
      <h2>Senha: </h2>
      <InputDesign value={password} placeholder="digite a senha" onChange={handlePassword}/>
      <br/>
      <br/>
      <Button onClick={() => goToGetTripDetail(history)} variant="contained" color="secondary">Login</Button>
      </subDiv>
    </Card>
  )

}


