import React from 'react';
import './App.css';
import Post from './components/Post/Post';

class App extends React.Component {

//**************** criar os setamentos **************************//

state = {
  post:[
    {
      nomeUsuario: "Paulinha",
      fotoUsuario: "https://picsum.photos/50/50",
      fotoPost: "https://picsum.photos/200/150"
    },
    {
      nomeUsuario: "Carolaine",
      fotoUsuario: "https://picsum.photos/50/50/?blur",
      fotoPost: "https://picsum.photos/200/150/?blur=2"
    },
    {
      nomeUsuario: "Joselindo",
      fotoUsuario: "https://picsum.photos/50/50/?blur",
      fotoPost: "https://picsum.photos/200/150/?blur=2"
    },
    {
      nomeUsuario: "Douglas Manson",
      fotoUsuario: "https://picsum.photos/id/237/200/300",
      fotoPost: "https://picsum.photos/id/237/200/150"
    }
  ]
}

//*********chamar os setamentos ************// 


  render() {
    return (
      <div className={'app-container'}>
      </div>
    );
  }
}

export default App;
