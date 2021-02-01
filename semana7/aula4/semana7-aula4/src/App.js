import './App.css';
import Tela1 from './components/Books'
import React from 'react'
import styled from 'styled-components';
import Home from './components/Home';
import Header from './components/Header'
import Houses from './components/Houses'
import Books from './components/Books'



const BotaoClicar = styled.button`
    width: 100px;
    height: 30px;
    margin: auto;
    margin-left: 30px;
`

class App extends React.Component {

  state = {
    mostraPersonagem: false,
    valor: 0,
}

valorBotao = 0


mudarPagina = (compara) =>{
  if(this.state.valor === compara){
    this.setState({valor: 0})
  }
  else if(compara === 1){
    this.setState({valor: 1})
  }
  else if(compara === 2){
    this.setState({valor: 3})
  }
}

retornaComponente = () =>{
  switch(this.state.valor){
    case 0:
      return <Houses/>
   case 1:
     return <Books/>
    default:
      return null
  }
}

  render() {
    const componente = this.retornaComponente()
    return (
      <div>
        <h1>HOME PAGE</h1>
      <BotaoClicar onClick={()=> this.mudarPagina(this.valorBotao=0)}>HOUSES</BotaoClicar>
      <BotaoClicar onClick={()=> this.mudarPagina(this.valorBotao=1)}>LIVROS</BotaoClicar>
      {componente}
      </div>
    )
  }
}

export default App;
