import { BrowserRouter, Switch, Route } from "react-router-dom";
import React from 'react';
import SignUp from '../Pages/SignUp/SignUp';
import LoginPage from '../Pages/LoginPage/LoginPage';
import CreatePost from '../Pages/CreatePost/CreatePost';
import PostDetailPage from "../Pages/ PostDetailPage/PostDetailPage";


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
            <Route exact path={"/post/:postId"}>
                <PostDetailPage/>
            </Route>
        </Switch>
    </BrowserRouter>
  )
}

export default Router;


