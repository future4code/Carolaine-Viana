import {useHistory} from 'react-router-dom';
import React from "react";
import {goToLoginPage, goToCreateTrip} from '../components/Router/Coordinator'

const HomePage = () => {
    const history = useHistory();

    return(
        <div>
            <h1>Login</h1>
            <button onClick={() => goToLoginPage(history)}>Login</button>
            <h1>Formulario de inscricao</h1>
            <button onClick={() => goToCreateTrip(history)}>Criar uma viagem</button>
        </div>
    )
}

export default HomePage;