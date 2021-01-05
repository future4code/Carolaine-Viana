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

export default class Etapa1 extends React.Component {

    render() {
        return (
            <DivMain>
                <h3><strong>ETAPA 1 - DADOS GERAIS</strong></h3>
                <p>1. Qual o seu nome?</p>
                <InputNome type="email" />
                <p>2. Qual sua idade</p>
                <InputIdade type="number" />
                <p>3. Qual seu email?</p>
                <InputEmail />
                <p>4. Qual a sua escolaridade?</p>
                <select>
                    <option value="EMI">Ensino medio incompleto</option>
                    <option value="EMC">Ensino medio completo</option>
                    <option value="ESI">Ensino Superior Incompleto</option>
                    <option value="ESC">Ensino Superior Completo</option>
                </select>
            </DivMain>
        )
    }
}
