import styled from 'styled-components'
import React from 'react'

//**************** criar os setamentos **************************//

const DivMain = styled.div`
    text-align: center;
`

const InputNome = styled.input`
    height: 10px;
    width: 100px;
`

const InputIdade = styled.input`
    height: 10px;
    width: 100px;
`
const InputEmail = styled.input`
    height: 10px;
    width: 100px;
`
const InputEscolaridade = styled.input`
    height: 10px;
    width: 150px;
`

//*********chamar os setamentos ************// 

export default class Conteudo extends React.Component {

    render() {
        return (
            <DivMain>
                <h1>ETAPA 1 - DIGITE SEUS DADOS</h1>
                <h2>1. Qual o seu nome?</h2>
                <InputNome type="email" />
                <h2>2. Qual sua idade</h2>
                <InputIdade type="number" />
                <h2>3. Qual seu email?</h2>
                <InputEmail />
                <h2>4. Qual a sua escolaridade?</h2>
                <select>
                    <option value="Ensino medio incompleto">Volvo</option>
                    <option value="teste">teste</option>
                    <option value="teste">teste</option>
                    <option value="teste">teste</option>
                </select>


            </DivMain>
        )
    }

}