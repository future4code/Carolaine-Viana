import React from 'react';
import styled from 'styled-components';
import axios from 'axios';

const DivCadastro = styled.div`
    border: 1px solid black;
    width: 400px;
    height: 250px;
    margin: auto;
    margin-top: 50px;
`

const InputNome = styled.input`
    width: 100px;
    height: 10px;
`

const InputEmail = styled.input`
    width: 100px;
    height: 10px;
`

const BotaoSalvar = styled.button`
    width: 100px;
    height: 30px;
    background-color: black;
    color: white;
`


class Usuarios extends React.Component {

    state = {
        inputNome: "", //vai pegar oq eu digitar
        inputEmail: "", //vai pegar oq eu digitar
    };

    criarUsuario = () =>{
        const body = {
            name: this.state.inputNome, //seguir o nome que esta na API = name
            email: this.state.inputEmail  //seguir o nome que esta na API = email
        };

        //request para enviar o usuario la pra dentro
        const request = axios.post(
            "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
            body,
            {
                headers:{
                    Authorization: "carolaine-viana-epps"
                }
            }
        )
        //validando se funcionou
        request
        .then((resposta) =>{
            alert("criada com sucesso")
            this.props.pegarTudo() //atualizar a lista com o ultimo adicionado
        })
        .catch((erro) =>{
            alert("nao foi")
        })
    }    



// **************************** funcoes **************************** \\

    
    pegarInputNome = (event) => {
        this.setState({
            inputNome: event.target.value
        })
        console.log(this.state.inputNome)
    }

    pegarInputEmail = (event) => {
        this.setState({
            inputEmail: event.target.value
        })
        console.log(this.state.inputEmail)
    }

    // **************************** renderiza **************************** \\

    render() {
        return (
            <DivCadastro>
                <p>Nome</p>
                <InputNome onChange={this.pegarInputNome} value={this.state.valorInput}/>
                <p>Email</p>
                <InputEmail onChange={this.pegarInputEmail}/>
                <p><BotaoSalvar onClick={this.criarUsuario}>Criar usuario</BotaoSalvar></p>
            </DivCadastro>
        )
    }
}

export default Usuarios;