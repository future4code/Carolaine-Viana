import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import useForm from "../../Hooks/useForm";
import style from "./Style.css";
import useUnProtectedPage from '../../Hooks/useUnProtectedPage'
import {signUp} from '../../services/user';

const SignUpForm = () => {
  let token = localStorage.getItem("token");
  const [form, onChange, clear] = useForm({username: '', email: '', password: ''});
  const history = useHistory();


  const onSubmitForm = (event) => {
    event.preventDefault();
    signUp(form, clear, history)
    console.log(form);
    // console.log(data.results.message)

  };

  return (
    <>
      <h1>Create Account</h1>
      <form onSubmit={onSubmitForm}>
        <label for="paperInputs1"></label>
        <input
          name={"username"}
          value={form.username}
          onChange={onChange}
          type="text"
          placeholder="seu nome de usuário"
          className="inputDesign"
          required
          autoFocus
        />
        <input
          name="email"
          value={form.email}
          onChange={onChange}
          type="email"
          placeholder="Digite seu email"
          className="inputDesign"
          required
        />
        <input
          name="password"
          value={form.password}
          onChange={onChange}
          type="text"
          placeholder="Digite uma senha"
          className="inputDesign"
          required
        />
        
        <button type={"submit"} fullwidth variant={"text"} class="btn-sucess">
          Fazer cadastro
        </button>
        {/* <button class="btn-success" onClick={handleLogin}>Cadastro</button> */}
        {/* <button onClick={() => history.goBack()}>VOLTAR</button> */}
      </form>
    </>
  );
};

export default SignUpForm;
