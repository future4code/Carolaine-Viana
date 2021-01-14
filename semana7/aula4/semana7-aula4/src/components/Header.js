import React from 'react';
import styled from 'styled-components';

const Cabecalho = styled.div`
    display: flex;
    flex-direction: row;
    border: 1px solid red;
    height: 60px;
    width: 100%;
`


export default function Header(){
    return(
        <Cabecalho>
            <ul>
                <li>HOME</li>
                <li>CONTATO</li>
            </ul>
        </Cabecalho>
    )
}