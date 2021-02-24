import LoginPage from './components/LoginPage/LoginPage';
import CreateUser from './components/CreateUser/Create';
import Feed from './components/CreatePost/CreatePost';
import {PaperButton, PaperLayout, PaperCol, PaperForm, PaperInput, PaperSelect, PaperRadio, PaperCheckbox} from 'react-paper-css';
import { Route } from 'react-router-dom';
import Router from './components/Router/Router';
import useProtectedPage from './components/Hooks/useProtectedPage';


function App() {

  return (
    <div>
      <Router />
    </div>
  )
}

export default App;
