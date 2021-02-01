import React from 'react';
import axios from 'axios';
import styled from 'styled-components';

const DivMain = styled.div`
    border: 1px solid white;
    margin: auto;
    width: 500px;
    text-align: center;
    height: 100%;
`

export default class Home extends React.Component{

    render(){
        return(
            <DivMain>
                <h1>HOME</h1>
                {/* <button onClick={this.props.abrirLivros}>EXIBIR</button> */}
            </DivMain>
        )
    }
}