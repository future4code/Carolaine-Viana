import React from 'react';
import axios from 'axios';
import styled from 'styled-components';

const DivMain = styled.div`
    border: 1px solid white;
    margin: auto;
    width: 500px;
    text-align: center;
    color: white;
    background-color: black;
`

export default class Tela1 extends React.Component {

    state = {
        _id: "",
        firstname: "",
        lastname: "",
        todosDados: []
    }

    getBooks = () => {
        const request = axios.get("https://anapioficeandfire.com/api/books")
            .then((responde) => {
                alert('Carregado com sucesso')
                this.setState({
                    todosDados: responde.data
                })
                console.log(responde.data)
            }).catch((error) => {
                alert('Nao foi carregado')
            })
    }

    componentDidMount = () => {
        this.getBooks();
    };

    render() {
        return (
            <DivMain>
                <h1>BOOKS</h1>
                {this.state.todosDados.map(p => {
                    return (
                        <div>
                            <p><strong>Titulo: </strong> {p.name}</p>
                            <p><strong>Número de páginas: </strong>{p.numberOfPages}</p>
                        </div>
                    )
                })}
            </DivMain>
        )
    }
}