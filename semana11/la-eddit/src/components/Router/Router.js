import { BrowserRouter, Switch, Route } from "react-router-dom";
import React from 'react';
import SignUp from '../Pages/SignUp/SignUp';
import LoginPage from '../Pages/LoginPage/LoginPage';
import CreatePost from '../Pages/CreatePost/CreatePost';


const Router = () => {
  return (
    <BrowserRouter>
        <Switch>
            <Route exact path="/">
                <LoginPage />
            </Route>
            <Route exact path="/create">
                <SignUp />
            </Route>
            <Route exact path="/feed">
                <CreatePost />
            </Route>
        </Switch>
    </BrowserRouter>
  )
}

export default Router;


