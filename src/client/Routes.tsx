import React from 'react'
import {Switch, Route} from 'react-router-dom'

import {Home } from './pages'

const Routes = () => {
    return (
        <Switch>
            <Route to='/' component={Home}></Route>
        </Switch>
    )
}

export default Routes