import styled from 'styled-components'
import React from 'react'

//**************** criar os setamentos **************************//

const DivMain = styled.div`
    text-align: center;
`

const InputCurso = styled.input`
    height: 10px;
    width: 100px;
`

//*********chamar os setamentos ************// 

export default class Etapa2 extends React.Component{

    render(){
        return(
            <DivMain>
            <h1>ETAPA 2 - INFORMACOES DO ENSINO SUPERIOR</h1>
            <h2>5. Qual curso?</h2>
            </DivMain>
        )
    }
}