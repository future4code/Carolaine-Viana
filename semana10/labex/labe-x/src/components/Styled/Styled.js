import styled from 'styled-components';
// import Appcss from '../App.css'

export const Container = styled.div`
  background-color: black;
`

export const Card = styled.div` 
  width: 500px;
  box-shadow: 20px 20px 50px rgba(0, 0, 0, 0.5);
  border-radius: 15px;
  background: rgba(255, 255, 255, 0.1);
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  border-top: 1px solid rgba(255, 255, 255, 0.5);
  border-left: 1px solid rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(5px);
  margin: auto;
  text-align: center;
  margin-top: 100px;
  color: white;
  /* background-color: #080C23; */
`

export const subDiv = styled.div`
  width: 100%;
`

export const ImagemBackground = styled.img`
    height: 100px;
    object-fit: cover;
    margin: auto;
`

export const Teste = styled.div`
  background-color: red;
  color: black;
`

export const DivMain = styled.div`
  background-color: #080C24;
  color: white;
  text-align: center;
`

export const Caixa = styled.div`
    width: 200px;
    height: 200px;
    border-radius: 100%;
    background-color: yellow;
`

export const DivImagens = styled.img`
  width: 400px;
  height: 400px;
  object-fit: cover;
  margin: auto;
  border-radius: 100%;
`

export const InputDesign = styled.input`
  height: 30px;
  width: 200px;
  color: black;
`



