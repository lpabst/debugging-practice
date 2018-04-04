
import React from 'react';
import { Switch, Route } from 'react-router-dom';

import One from './components/One/One.js';
import Two from './components/Two/Two.js';
import Three from './components/Three/Three.js';
import Four from './components/Four/Four.js';
import Five from './components/Five/Five.js';


export default (
    <Switch>
        
        <Route component={ One } path='/1' exact />
        <Route component={ Two } path='/2' exact />
        <Route component={ Three } path='/2' exact />
        <Route component={ Four } path='/4' exact />
        <Route component={ Five } path='/5' exact />

    </Switch>
)
