import React, { useEffect, useState } from "react";
import Styled from "./Style.css";
import { useHistory } from "react-router-dom";
import axios from "axios";
import useForm from "../../Hooks/useForm";
import { goToCreate, goToFeed } from "../../Router/Coordinator";
import {login} from '../../services/user';

const LoginForm = () => {
  const history = useHistory();
  let token = localStorage.getItem("token");
  const [form, onChange, clear] = useForm({ email: "", password: "" });

  const clickSubmittion = (event) => {
    event.preventDefault();
    console.log(form);
    login(form, clear, history)
  };

  

  return (
    <>
      <form className="card-body" onSubmit={clickSubmittion}>
        <input
          // name={email} //pega o email do useform
          name="email"
          value={form.email} //veio do useform
          type="email"
          placeholder="E-mail"
          onChange={onChange} //veio do form
          className="inputDesign"
          required
          type={"email"}
          // variant={"outlainer"}
          // fullWidth
        />
        <input
          name="password"
          value={form.password} //veio do useform
          placeholder="Senha"
          onChange={onChange} //veio do form
          className="inputDesign"
          required
          type={"password"}
        />

        <button type={"submit"} fullwidth variant={"text"} class="btn-success">
          Login
        </button>
        {/* <button class="btn-success" onClick={clickSubmittion}>Login</button> */}
      </form>
    </>
  );
};

export default LoginForm;
