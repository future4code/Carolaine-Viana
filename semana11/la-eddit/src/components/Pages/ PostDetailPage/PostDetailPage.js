import PostCard from "../CreatePost/PostCard";
import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import axios from "axios";
import { TextField } from "@material-ui/core";
import useForm from "../../Hooks/useForm";
import { PanoramaSharp } from "@material-ui/icons";
import Style from "../ PostDetailPage/Style.css";

const PostDetailPage = (props) => {
  const history = useHistory();
  const params = useParams();
  const [postDetail, setPostDetail] = useState(null); //ter certeza se ja carregou ou nao
  const [form, onChange, clear] = useForm({ text: "" });

  useEffect(() => {
    //se nao tiver um token
    if (localStorage.getItem("token") === null) {
      history.push("/login");
    } else if (!params.postId) {
      //se nao tiver o id do post volta pro feed
      history.push("/feed"); //vai pra pagina de feed
    }
  }, []);

  // useEffect(() => {
  //   const axiosConfig = {
  //     headers: {
  //       Authorization: localStorage.getItem("token"),
  //     }
  //   }
  //   axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labEddit/posts/${params.postId}`, axiosConfig)
  //     .then((res) => {
  //       setPostDetail(res.data.post);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     })
  // }, []);

  // ********** FUNCOES DE COMENTARIOS ********** //

  useEffect(() => {
    updateCommentOnscreen();
  }, []);

  const updateCommentOnscreen = () => {
    //carrega os dados assim que a pagina carrega
    const axiosConfig = {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    };
    axios
      .get(
        `https://us-central1-labenu-apis.cloudfunctions.net/labEddit/posts/${params.postId}`,
        axiosConfig
      )
      .then((res) => {
        setPostDetail(res.data.post);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleComment = () => {
    const axiosConfig = {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    };
    const body = {
      text: form.text,
    };

    axios
      .post(
        `https://us-central1-labenu-apis.cloudfunctions.net/labEddit/posts/${params.postId}/comment`,
        body,
        axiosConfig
      )
      .then((res) => {
        alert("comentário criado com sucesso"); //se deu certo
        clear();
        updateCommentOnscreen(); //bate aqui pra atualizar
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // ********** FUNCOES DE VOTAR EM UM COMENTARIO ********** //

  const handleCommentVote = (commentId, direction) => {
    const axiosConfig = {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    };

    const body = {
      direction: direction, //direction do parametro da funcao
    };

    axios
      .put(
        `https://us-central1-labenu-apis.cloudfunctions.net/labEddit/posts/${params.postId}/comment/${commentId}/vote`,
        body,
        axiosConfig
      )
      .then((res) => {
        alert("votado com sucesso");
        updateCommentOnscreen(); //bate aqui pra atualizar
      })
      .catch((err) => {
        alert("nao foi possivel votar no comentário");
        console.log(err);
      });
  };

  // ********** FUNCOES DE VOTAR EM UM POST ********** //

  // const handleUpVote = (direction) => {
  //   handleCommentVote(post.id, 1); //se to votando pra cima
  // };

  // const handleDownVote = (direction) => {
  //   handleCommentVote(post.id, -1); //se to votando pra baixo
  // };

  // ********** RETURN ********** //

  return (
    <div>
      {/* hideComment=botao de comentar fica falso pq ele ja esta na pagina de comentar */}
      {postDetail !== null && (
        <PostCard
          post={postDetail}
          hideComment
          handleCommentVote={handleCommentVote}
        />
      )}

      <div className="commentBox">
        <form>
          <input
            name="text"
            value={form.text}
            onChange={onChange}
            placeholder="Digite seu comentário"
          />
        </form>

        <button onClick={handleComment}>Criar comentário</button>
      </div>

      {/* MAP Lista de comentarios */}
      {postDetail &&
        postDetail.comments.map((comment) => {
          return (
            <div className="userCommentBox">
              {/* <p>USER: {comment.username} </p> */}
              <span><strong>User: </strong>  {comment.username} </span>
              <span><strong>Comment: </strong>  {comment.text} </span>
              <span> Likes: {comment.votesCount}</span>
              {/* <img src="https://img.icons8.com/doodle/48/000000/facebook-like.png"/> */}
            </div>
          );
        })}
        
       <div className="buttonGoBack">
           <button className="buttonGoBack" onClick={() => history.goBack()}>VOLTAR</button>
       </div>

      {/* <CommentLista /> */}
    </div>
  );
};

export default PostDetailPage;
