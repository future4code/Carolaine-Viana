import React, { useEffect, useState } from "react";
import Styled from "./Style.css";
import { goToCreate, goToSignUp } from "../../Router/Coordinator";
import { useHistory } from "react-router-dom";
import axios from "axios";
// import goToFeed from '../../components/Router/Coordinator';
import useForm from "../../Hooks/useForm";
import LoginForm from "./LoginForm";

const LoginPage = () => {
  const history = useHistory();
  // const [email, setemail] = useState('')
  const [password, setpassword] = useState("");
  let token = localStorage.getItem("token");
  const [form, onChange, clear] = useForm({ email: "", password: "" });

  // const handleEmail = (event) =>{
  //   setemail(event.target.value)
  //   console.log(email)
  // }

  // const handlePassword = (event) =>{
  //   setpassword(event.target.value)
  //   console.log(password)
  // }

  // const loginPage = () => {
  //   const body = {
  //     email: form.email,
  //     password: form.password,
  //   }
  //   axios.post(`https://us-central1-labenu-apis.cloudfunctions.net/labEddit/login`, body)
  //   .then((resposta)=>{
  //     localStorage.setItem("token", resposta.data.token)
  //     localStorage.setItem("user", resposta.data.user.username)
  //       alert('deu certo')
  //   }).catch((error)=>{
  //     alert('deu errado')
  //     console.log(error)
  //   })
  // }

  // if(token==!null){
  //     <FeedPage/>
  // }

  // useEffect(() =>{
  //   if(token){
  //     goToFeed(history)
  //   }
  // }, [history, token])

  return (
    <>
      <div className="main">
        <h1>Login Page</h1>
        <LoginForm />
        <p>Nao possui conta? <u>cadastre-se</u></p>
        <button onClick={() => goToCreate(history)} className="card-body">Cadastro</button>
      </div>
    </>
  );
};

export default LoginPage;
