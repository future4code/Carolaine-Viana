import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomePage from '../HomePage'
import LoginPage from '../LoginPage';
import CreateTripPage from '../CreateTripPage';
import GetTrips from '../GetTrips';

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
  