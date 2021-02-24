import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import SignUpForm from "./SignUpForm";
import useUnProtectedPage from '../../Hooks/useUnProtectedPage'

const SignUp = () => {
  useUnProtectedPage()
  const history = useHistory();

  return (
    <>
      <SignUpForm />
      {/* <button onClick={() => history.goBack()}>VOLTAR</button> */}
    </>
  );
};

export default SignUp;
