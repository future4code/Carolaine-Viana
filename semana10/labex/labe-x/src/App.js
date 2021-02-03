import Router from './components/Router/Router';
import React from "react";
import {Card, ImagemBackground} from './components/Styled/Styled';
import background from './imagens/bkp.jpg'
import Appcss from './App.css';
import Header from './components/Pages/Header';

export default function App(){
  return (
    <div>
      <Header/>
      <Card>
         <Router/>
      </Card>
          <ImagemBackground src={background}/>
    </div>
    );
}