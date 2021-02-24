import React, { useState } from "react";
import styled from './Style.css';

const PostCard = (props) =>{
    
    return(
        <>
            <h1>Post Card</h1>
            <div className="cardMedia">
                <p>{props.titulo}</p>
                <img src={props.imagem}/>
            </div>
        </>
    )

}

export default PostCard;