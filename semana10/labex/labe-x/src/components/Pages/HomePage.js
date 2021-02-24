import {useHistory} from 'react-router-dom';
import React from "react";
import {goToLoginPage, goToListTripsPage} from '../Router/Coordinator'
import Button from '@material-ui/core/Button';
import {Card, subDiv, DivImagens} from '../Styled/Styled';
import img3 from '../../imagens/img3.png';
import styled from 'styled-components';


const DivTeste = styled.img`
  width: 400px;
  height: 400px;
  object-fit: cover;
  margin: auto;
  border-radius: 100%;
`

const HomePage = () => {
    const history = useHistory();

    return(
        <Card>
            <DivImagens src={img3}/>
            <h1><strong>Bem vindo ao Labe-X</strong></h1>
            <h2>Voce é um viajante ou um administrador?</h2>
            <subDiv>
                <Button onClick={()=>goToLoginPage(history)} variant="contained" color="primary">Administrador</Button><br/><br/>
                <Button onClick={()=>goToListTripsPage(history)} variant="contained" color="primary">Viajante</Button>
            </subDiv>
            
        </Card>
    )
}

export default HomePage;