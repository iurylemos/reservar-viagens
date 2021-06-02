import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Reservas from '../pages/Reservas';

const Routes: React.FC = () => {

    return (
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/reservas" component={Reservas} />
        </Switch>
    );
}


export default Routes;
