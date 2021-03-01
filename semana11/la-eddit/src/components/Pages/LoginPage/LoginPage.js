import React, { useEffect, useState } from "react";
import Styled from "./Style.css";
import { goToCreate, goToSignUp } from "../../Router/Coordinator";
import { useHistory } from "react-router-dom";
import axios from "axios";
// import goToFeed from '../../components/Router/Coordinator';
import useForm from "../../Hooks/useForm";
import LoginForm from "./LoginForm";
import img3 from '../../../img/img3.png';
import img1 from '../../../img/img1.png';

const LoginPage = () => {
  const history = useHistory();
  let token = localStorage.getItem("token");

 
  return (
    <>
      <div className="main">
        <img src={img3}/>
        <h1>Login Page</h1>
        <LoginForm />
        <p>Nao possui conta? <u>cadastre-se</u></p>
        <button onClick={() => goToCreate(history)} className="card-body">Cadastro</button>
      </div>
      
    </>
  );
};

export default LoginPage;
