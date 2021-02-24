import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomePage from '../Pages/HomePage'
import LoginPage from '../Pages/LoginPage';
import CreateTripPage from '../Pages/CreateTripPage';
import ListTripsPage from '../Pages/ListTripsPage';
import GetTripDetail from '../Pages/getTripDetail';
import ApplyToTrip from '../Pages/ApplyToTrip';
import Candidates from '../Pages/Candidates';
import Header from '../Pages/Header';

export default function Router(){
    return(
        <BrowserRouter>
        <Header/>
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
                <Route exact path="/list">
                    <ListTripsPage/>
                </Route>
                <Route exact path="/trips/detail">
                    <GetTripDetail/>
                </Route>
                <Route exact path="/ApplyToTrip">
                    <ApplyToTrip/>
                </Route>
                <Route exact path="/Candidates">
                    <Candidates/>
                </Route>
                
            </Switch>
        </BrowserRouter>
    );
}
  