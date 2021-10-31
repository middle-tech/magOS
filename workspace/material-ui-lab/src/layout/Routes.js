import React from 'react';

import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";

import Home from '../Home';
import Accounting from '../Accounting';
import Patient from '../patient/Patient';
import Appointment from '../Appointment';
import WaitingRoom from '../WaitingRoom';
import PatientRecord from '../patient/PatientRecord';
 
export default function Routes() {

return (
    <Switch>
        <Route path="/" exact>
            <Home />
        </Route>
        <Route path="/patient" exact>
            <Patient />
        </Route>
        <Route path="/patient/record">
            <PatientRecord />
        </Route>
        <Route path="/waitingroom">
            <WaitingRoom />
        </Route>
        <Route path="/appointment">
            <Appointment />
        </Route>
        <Route path="/accounting">
            <Accounting />
        </Route>
        
    </Switch>
);
}

