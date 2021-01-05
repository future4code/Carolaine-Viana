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
            <h3>ETAPA 2 - INFORMAÇÕES DO ENSINO SUPERIOR</h3>
            <p>5. Qual curso?</p>
            <InputCurso/>
            <p>6. Qual sua unidade de ensino?</p>
            <InputCurso/>
            </DivMain>
        )
    }
}