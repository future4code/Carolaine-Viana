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
  background-color: white;
  text-align: center;
  margin-top: 100px;
  color: black;
`

export const ImagemBackground = styled.img`
    width: 100%;
    object-fit: cover;
`

export const Teste = styled.div`
  background-color: red;
  color: black;
`

