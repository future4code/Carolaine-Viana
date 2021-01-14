import React from 'react';
import axios from 'axios';
import styled from 'styled-components';

const DivMain = styled.div`
    border: 1px solid white;
    margin: auto;
    width: 500px;
    text-align: center;
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
                alert('sucesso')
                this.setState({
                    todosDados: responde.data
                })
                console.log(responde.data)
            }).catch((error) => {
                alert('nao foi gays')
            })
    }

    componentDidMount = () => {
        this.getBooks();
    };

    render() {
        return (
            <DivMain>
                <h1>LIVROS</h1>
                {this.state.todosDados.map(p => {
                    return (
                        <div>
                            <p>{p.name}</p>,
                            <p>{p.author}</p>
                        </div>
                    )
                })}
            </DivMain>
        )
    }
}