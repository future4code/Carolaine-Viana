import React, { useEffect, useState } from "react";
import styled from "./Style.css";
import { goToLoginPage } from "../../Router/Coordinator";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";

import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import CommentIcon from "@material-ui/icons/Comment";

const PostCard = (props) => {
  const history = useHistory(props);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      goToLoginPage(history);
    }
  }, [history]);

  const handleGoToDetail = () => {
    history.push(`/post/${props.post.id}`); //mandar pra pagina ja tem que mandar com o id
  };

  // ********** FUNCOES DE VOTAR EM UM POST ********** //

  const handleUpVote = (direction) => {
    props.handleVote(props.post.id, 1); //se to votando pra cima
  };

  const handleDownVote = (direction) => {
    props.handleVote(props.post.id, -1); //se to votando pra baixo
  };

  //atualizar o loading
  return (
    <div>
      <Card>
        {/* {isLoading ? <progress /> : <p>pagina carregada</p>} */}
        <CardHeader
          avatar={<Avatar aria-label="recipe"></Avatar>}
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title={props.post.username}
          subheader={props.post.title}
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            <p>
              <strong>Disse: </strong>
              {props.post.text}
            </p>
          </Typography>
        </CardContent>

        <CardActions>
          <IconButton onClick={handleUpVote}>
            <ArrowUpwardIcon />
          </IconButton>

          <p>{props.post.votesCount}</p>

          <IconButton onClick={handleDownVote}>
            <ArrowDownwardIcon />
          </IconButton>

          {/* se for pra mostrar o botao */}
          {!props.hideComment && (
            <button
              variant="contained"
              color="primary"
              startIcon={<CommentIcon />}
              onClick={handleGoToDetail}
            >
              Comentar
            </button>
          )}
        </CardActions>
      </Card>
    </div>
  );
};

export default PostCard;
