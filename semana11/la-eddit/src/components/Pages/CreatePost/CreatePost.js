import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import axios from "axios";
import useProtectedPage from "../../Hooks/useProtectedPage";
import PostCard from "./PostCard";
import useRequestData from "../../Hooks/useRequestData";
import { goToLoginPage } from "../../Router/Coordinator";
import useForm from "../../Hooks/useForm";

const CreatePost = (props) => {
  useProtectedPage();
  const history = useHistory();
  let token = localStorage.getItem("token");
  const [posts, setPosts] = useState([]);
  const [form, onChange, clear] = useForm({ text: "", title: "" });
  const [comments, setComments] = useState([]);
  const [postDetail, setPostDetail] = useState({});
  let user = localStorage.getItem("user");

  // const dataPosts = useRequestData([], "https://us-central1-labenu-apis.cloudfunctions.net/labEddit/posts");

  const createPost = () => {
    const headers = {
      headers: {
        Authorization: token,
      },
    };
    axios
      .post(
        `https://us-central1-labenu-apis.cloudfunctions.net/labEddit/posts`,
        form,
        headers
      )
      .then((response) => {
        alert("criado com sucesso");
        console.log(response.data);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  const submitForm = (event) => {
    event.preventDefault();
    createPost();
    clear();
  };

  return (
    <div>
      <h1>Pagina de post</h1>
      <h2>Feed</h2>
      <h2>Criar post</h2>
      <form onSubmit={submitForm}>
        <input
          name="title"
          value={form.title}
          onChange={onChange}
          placeholder="titulo do post"
        />
        <input
          name="text"
          value={form.text}
          onChange={onChange}
          placeholder="o que quer escrever"
        />

        <button onClick={createPost} type={"submit"} class="btn-success">
          Criar
        </button>
      </form>

      <PostCard />
    </div>
  );
};

export default CreatePost;
