import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomePage from '../Pages/HomePage'
import LoginPage from '../Pages/LoginPage';
import CreateTripPage from '../Pages/CreateTripPage';
import ListTripsPage from '../Pages/ListTripsPage';

export default function Router(){
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <HomePage/>
                </Route>
                <Route exact path="/login">
                    <LoginPage/>
                </Route>
                <Route exact path="/trips/create">
                    <CreateTripPage/>
                </Route>
                <Route exact path="/trips/list">
                    <ListTripsPage/>
                </Route>
            </Switch>
        </BrowserRouter>
    );
}
  