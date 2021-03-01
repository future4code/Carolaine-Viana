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
  const [savePosts, setSavePosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const params = useParams();


  // const dataPosts = useRequestData([], "https://us-central1-labenu-apis.cloudfunctions.net/labEddit/posts");

  //pagina privada
  useEffect(() => {
    if (!localStorage.getItem("token") === null) {
      // goToLoginPage(history);
      history.push("/login");
    }
  }, [history]);

  //carregou pega os posts
  useEffect(() => {
    getPosts()
  }, [])
  
  const getPosts = () =>{
  //provar pro back que to logada
  const headers = {
    headers: {
      Authorization: token,
    },
  };
  setIsLoading(true); //ele fica carregando antes do axios bater
  axios
    .get(
      "https://us-central1-labenu-apis.cloudfunctions.net/labEddit/posts",
      headers
    )
    .then((res) => {
      console.log("AQUIII", res.data);
      //agora quero guardar esse array em um estado...
      setSavePosts(res.data.posts);
      setIsLoading(false); //carregou
    })
    .catch((err) => {
      console.log(err);
    })
  }

  const submitForm = (event) => {
    event.preventDefault();
    // createPost();
    clear();
  }
  
    // ********** FUNCOES DE VOTAR EM UM POST ********** //

  const handleVote = (postId, direction) => {
    const axiosConfig = {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    };

    const body = {
      direction: direction //direction do parametro da funcao
    }

    axios.put(`https://us-central1-labenu-apis.cloudfunctions.net/labEddit/posts/${postId}/vote`, body, axiosConfig)
    .then((res) => {
      alert("votado com sucesso");
      getPosts()
    }).catch((err) => {
      alert("nao foi possivel votar no comentário");
      console.log(err);
    })
  }

  return (
    <div>
      <h1>Pagina de post</h1>
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
        <button type={"submit"} class="btn-success">Postar</button>
      </form>
      
      {/* MAP DOS POSTS */}
      
      {isLoading ? <progress /> : <p>pagina carregada</p>}
      <div className="feedWrapper">
      {savePosts.map((post) => {
        return (
          <PostCard key={post.id} post={post} handleVote={handleVote}/>
        )
      })}
      </div>
    </div>
  );
};

export default CreatePost;
