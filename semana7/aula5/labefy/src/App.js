import React from "react";
import axios from "axios";
import styled from 'styled-components'

const DivMain = styled.div`
  margin: auto;
  border: 1px solid red;
  width: 500px;
  text-align: center;
`

export default class App extends React.Component {
  state = {
    playlists: [],
    valorInput: "",
    name: "",
    artist: "",
    url: ""
  };



  // ************************************ POST *********************************************

  criaPlaylist = () => {
    const body = {
      name: this.state.valorInput
    };

    const request = axios.post(
      "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists",
      body,
      {
        headers: {
          Authorization: "carolaine-viana-epps"
        }
      }
    );

    request.then((resposta) => {
      alert("Criada com sucesso!");
      this.pegarPlaylists();
      this.setState({ valorInput: "" });
    })
      .catch((erro) => {
        alert("Nao consegui criar a playlist :(");
      });
  };

  // ************************************ POST *********************************************

  adicionarMusica = (idPlay) => {
    const body = {
      name: this.state.name,
      artist: this.state.artist,
      url: this.state.url
    };
    const request = axios.post(
      `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${idPlay}/tracks`,
      body,
      {
        headers: {
          Authorization: "carolaine-viana-epps"
        }
      }
    );
    request.then((respondeu) => {
      alert('sucessssso!')
      this.setState({ name: "", artist: "", url: "" })
    }).catch((erro) => {
      alert('nao foi pai')
    })
  }

  // ************************************ GET *********************************************


  pegarPlaylists = () => {
    const request = axios.get(
      "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists",
      {
        headers: {
          Authorization: "carolaine-viana-epps"
        }
      }
    );

    request.then((resposta) => {
        this.setState({ playlists: resposta.data.result.list });
      })
      .catch((erro) => {
        alert("Impossivel pegar playlists :(" + erro.message);
      });
  };

  componentDidMount = () => {
    this.pegarPlaylists();
  };

 
  onChangeInputAddName = (event) => {
    this.setState({ name: event.target.value })
  };

  onChangeInputAddArtist = (event) => {
    this.setState({ artist: event.target.value })
  };

  onChangeInputAddUrl = (event) => {
    this.setState({ url: event.target.value })
  };

  onClickAddTrack = () =>{
    this.addTrack(this.idDetails)
};

  // ************************************ RENDER *********************************************

  render() {
    const playlistsRenderizadas = this.state.playlists.map((playlist) => {
      return <DivMain>{playlist.name}</DivMain>
    });

    return (
      <div className="App">
        <DivMain>
          <h1>Criar playlist</h1>
          <input onChange={this.guardaNomePlaylist} value={this.state.valorInput} />
          <button onClick={this.criaPlaylist}>Criar playlist!</button>
          <h1>Lista de playlists</h1>
          {playlistsRenderizadas}
          <h1>Adicionar musica</h1>
          <input onChange={this.onChangeInputAddName} value={this.state.name} placeholder="nome da musica" />
          <input onChange={this.onChangeInputAddArtist} value={this.state.artist} placeholder="artista"/>
          <input onChange={this.onChangeInputAddUrl} value={this.state.url} placeholder="url da musica"/>
          <button onClick={this.adicionarMusica}>Criar</button>
        </DivMain>
      </div>
    );
  }
}
