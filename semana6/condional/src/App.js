import './App.css';
import React from 'react';
import Etapa1 from './components/Etapa1';
import Etapa2 from './components/Etapa2';
import Etapa3 from './components/Etapa3';
import Final from './components/Final';
import styled from 'styled-components'

const BotaoProximo = styled.button`
  margin-left: 650px;
  height: 20px;
  width: 120px;
  margin-top: 30px;
`

export default class App extends React.Component {

  state = {
    etapa: 1
  }

  proximaEtapa = () => {
    this.setState({
      etapa: this.state.etapa + 1
    })
  }


  render() {
    const renderizaTela = () => {
      switch (this.state.etapa) {
        case 1:
          return <Etapa1 />;
        case 2:
          return <Etapa2 />;
        case 3:
          return <Etapa3 />;
        case 4:
          return <Final />;
        default:
          return <Etapa1 />
      }
    }
    return (
      <div>
        {renderizaTela()}
        {this.state.etapa < 4 ? <BotaoProximo onClick={this.proximaEtapa}>Proxima etapa</BotaoProximo> : null}
      </div>
    )
  }
}
