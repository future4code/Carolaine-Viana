import Router from './components/Router/Router';
import React from "react";
import {Card, ImagemBackground, DivImagens} from './components/Styled/Styled';
import background from './imagens/bkp.jpg'
import Appcss from './App.css';
import Header from './components/Pages/Header';
import img4 from './imagens/img4.png';
import styled from 'styled-components';


export default function App(){
  return (
    <div>
      <div>
         <Router/>
      </div>
          <ImagemBackground src={img4}/>
          
    </div>
    );
}