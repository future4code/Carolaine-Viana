import './App.css';
import Login from './components/Login'
import styled from 'styled-components';
import React from 'react';
import Lista from './components/Lista';
import axios from 'axios';
import TelaUsuario from './components/TelaUsuario';
import { baseUrl, axiosConfig } from './components/Parametros';

const BotaoLista = styled.button`
    width: 200px;
    height: 20px;
`

class App extends React.Component {

  state = {
    users: [], //vai trazer o array da API
    ligar: false,
    guardarUsuario: [],
    ligarTela: false,
    ligarLogin: true
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


  excluirUsuario = async (p) => {
    if (window.confirm('tem certeza que deseja deletar?')) {
      axios.delete(`${baseUrl}/${p.id}`, axiosConfig)
        .then((resp) => {
          this.pegarTudo()
        })
        .catch((erro) => {
          alert('nao deu bom')
        })
    }
  }

  acessarUsuario = async (id) => {
    // console.log(`${baseUrl}/${id}`)
    try {
      const response = await axios.get(`${baseUrl}/${id}`, axiosConfig)
      //   console.log(`${baseUrl}/${id}`)
      this.setState({ guardarUsuario: response.data,
                      ligarTela: !this.state.ligarTela,
      })
      // console.log(this.state.guardarUsuario)
    } catch (error) {
      console.log(error)
    }
  }

  componentDidMount = () => {
    this.pegarTudo();
  };

  render() {
    return (
      <div className="App">
        {/* {this.state.ligarLogin && <Login/>} */}
        {this.state.ligar === false ? <Lista listaUsuario={this.state.users} excluirUsuario={this.excluirUsuario}
          ligarTela={this.state.ligarTela} acessarUsuario={this.acessarUsuario} nome={this.state.guardarUsuario.name} /> : <Login pegarTudo={this.pegarTudo} />}
        <TelaUsuario pegarTudo={this.pegarTudo} acessarUsuario={this.acessarUsuario} />
        <BotaoLista onClick={this.ligarLista}>Avançar</BotaoLista>
      </div>
    )
  }
}

export default App;
