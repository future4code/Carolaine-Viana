import React, { useEffect, useState } from "react";
import styled from "./Style.css";
import { goToLoginPage } from "../../Router/Coordinator";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";

const PostCard = (props) => {
  const history = useHistory(props);
  const [posts, setPosts] = useState([]);

  const getPosts = () => {
    const axiosConfig = {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    };
    axios
      .get(
        "https://us-central1-labenu-apis.cloudfunctions.net/labEddit/posts",
        axiosConfig
      )
      .then((res) => {
        setPosts(res.data.posts);
        console.log(res);
        // console.log("posts", posts);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      goToLoginPage(history);
    }
    getPosts();
  }, [history]);

  return (
    <>
      <div className="main">
        {posts.map((p) => {
          return (
            <div className="card">
              <div className="cardMedia">
                <h3>Usuário: {p.username}</h3>
                <p>Descricao: {p.text}</p>
              </div>
              <div class="comment">
                <span>Comentar </span>
                <span> | 0 comentários</span>
              </div>
            </div>
          );
        })}

        <button onClick={() => history.goBack()}>VOLTAR</button>
      </div>
    </>
  );
};

export default PostCard;
