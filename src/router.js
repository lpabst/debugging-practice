
import React from 'react';
import { Switch, Route } from 'react-router-dom';

import One from './components/One/One.js';
import Two from './components/Two/Two.js';


export default (
    <Switch>
        
        <Route component={ One } path='/1' exact />
        <Route component={ Two } path='/2' exact />

    </Switch>
)
