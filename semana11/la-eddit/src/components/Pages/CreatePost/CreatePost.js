import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import useProtectedPage from "../../Hooks/useProtectedPage";
import PostCard from "./PostCard";
import useRequestData from "../../Hooks/useRequestData";

const CreatePost = (props) => {
  useProtectedPage();
  const history = useHistory();
  let token = localStorage.getItem("token");
  const recebeDados = useRequestData(
    [],
    "https://us-central1-labenu-apis.cloudfunctions.net/labEddit/posts"
  );
  console.log(recebeDados);
  
  const pegaDados = recebeDados.map((p)=>{
      return <p>{p.title}</p>
  })
  
  return (
    <div>
      {/* <PostCard
      titulo={"Batata"}
      imagem={"https://picsum.photos/200/300"}
    /> */}
      <h1>Pagina de post</h1>
      {pegaDados}
      <button onClick={() => history.goBack()}>VOLTAR</button>
    </div>
  );
};

export default CreatePost;
