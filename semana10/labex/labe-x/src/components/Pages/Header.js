import React from "react";
import styled from "styled-components";
import { goToHomePage } from "../Router/Coordinator";
import {useHistory} from "react-router-dom"
import Button from '@material-ui/core/Button';

const HeaderContainer = styled.div`
  width: 100%;
  height: 60px;
  background-color: white;
  color: white;
`;

const Header = () => {
  const history = useHistory()

  return (
    <HeaderContainer>
        <Button onClick={() => goToHomePage(history)}>Home</Button>
    </HeaderContainer>
  )
}
export default Header;