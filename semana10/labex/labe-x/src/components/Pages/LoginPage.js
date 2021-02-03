import React, { useEffect, useState } from "react";
import axios from 'axios';
import { useHistory } from "react-router-dom";

const LoginPage = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const history = useHistory();

  const handleEmail = (event) =>{
    setEmail(event.target.value);
  }

  const handlePassword = (event) => {
    setPassword(event.target.value);
  }

  useEffect(() =>{
    const token = localStorage.getItem("token");
    if(token) {
      history.push("/GetTripDetailPage") //dizer da onde vai pegar esse token
    }
  }, [history]);

  // const login = () => {
  //   const body = {
  //     email: email,
  //     password: password
  //   };

  //   axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labeX/carolaine-viana/login"), body.then(response=>{
  //     localStorage.setItem("token", response.data.token);
  //     history.push("/"); //pagina que vai puxar
  //   }).catch((error) =>{
  //     alert('erro ao puxar')
  //   })
  // };

  const login = () => {
    const body = {
      email: email,
      password: password
    };

    axios
      .post(
        "https://us-central1-labenu-apis.cloudfunctions.net/labeX/carolaine-viana/login",
        body
      )
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        history.push("/getTripDetail");
      })
      .catch((err) => {
        console.log(err);
      });
  };


  return (
    <div>
        <h1>Logar como administrador</h1>
        <input value={email} onChange={handleEmail} placeholder="email"/>
        <input value={password} onChange={handlePassword} placeholder="senha"/>
        <button value={login}>LOGAR</button>
    </div>
  )
};

export default LoginPage;

