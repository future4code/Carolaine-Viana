import './App.css';
import Usuarios from './components/Usuarios'
import styled from 'styled-components';
import React from 'react';
import Lista from './components/Lista';
import axios from 'axios';

const BotaoLista = styled.button`
    width: 200px;
    height: 20px;
`

class App extends React.Component {

  state = {
    users: [], //vai trazer o array da API
    ligar: false
  };

  ligarLista = () => {
    this.setState({
      ligar: !this.state.ligar
    })
  }


  pegarTudo = () => {
    const request = axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
      {
        headers: {
          Authorization: "carolaine-viana-epps"
        }
      }
    );
    request
      .then((response) => {
        this.setState({ users: response.data })
        console.log(response.data)
        console.log(this.state.users)
      })

      .catch((error) => {
        alert("Ocorreu um erro")
      })
  };

  excluirUsuario = (usuario) => {
    axios.delete(
      "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/" + usuario.id,
      {
        headers: {
          Authorization: "carolaine-viana-epps"
        }
      }
    ).then((resposta) => {
      this.pegarTudo()
      alert("excluido com sucesso")
    }).catch((erro) => {
      alert("nao foi")
    })
  }


  componentDidMount = () => {
    this.pegarTudo();
  };

  render() {
    return (
      <div className="App">
        {this.state.ligar === false ? <Lista listaUsuario={this.state.users} excluirUsuario={this.excluirUsuario} /> : <Usuarios pegarTudo={this.pegarTudo} />}

        <BotaoLista onClick={this.ligarLista}>Avançar</BotaoLista>
      </div>
    )
  }
}

export default App;
