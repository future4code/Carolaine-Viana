import {useHistory} from 'react-router-dom';
import React from "react";
import {goToLoginPage, goToCreateTrip} from '../Router/Coordinator'
import Button from '@material-ui/core/Button';

const HomePage = () => {
    const history = useHistory();

    return(
        <div>
            <h1>Login</h1>
            <Button onClick={() => goToLoginPage(history)} variant="contained" color="primary">Login</Button>
            <h1>Formulario de inscricao</h1>
            <Button onClick={() => goToCreateTrip(history)} variant="contained" color="primary">Criar uma viagem</Button>
        </div>
    )
}

export default HomePage;