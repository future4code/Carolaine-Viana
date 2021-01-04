import React from 'react'
import styled from 'styled-components'

//**************** criar os setamentos **************************//

const DivMain = styled.div`
    text-align: center;
`

const InputCurso = styled.input`
    height: 10px;
    width: 100px;
`

//*********chamar os setamentos ************// 

export default class Etapa3 extends React.Component{
    render(){
        return(
            <DivMain>
            <h3><strong>ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO</strong></h3>
            <p>5. Por que você não terminou um curso de graduação?</p>
            <InputCurso type="string"/>
            <p>6. Você fez algum curso complementar?</p>
            <select>
                <option value="nenhum">Nenhum</option>
                <option value="tecnico">Curso tecnico</option>
                <option value="ingles">Curso de ingles</option>
            </select>
            </DivMain>
        )
    }
}