import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomePage from '../Pages/HomePage'
import LoginPage from '../Pages/LoginPage';
import CreateTripPage from '../Pages/CreateTripPage';
import GetTrips from '../Pages/GetTrips';

export default function Router(){
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <HomePage/>
                </Route>
                <Route exact path="/LoginPage">
                    <LoginPage/>
                </Route>
                <Route exact path="/CreateTripPage">
                    <CreateTripPage/>
                </Route>
                <Route exact path="/GetTrips">
                    <GetTrips/>
                </Route>
            </Switch>
        </BrowserRouter>
    );
}
  