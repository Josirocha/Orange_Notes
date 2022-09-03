import React from 'react'
import { BrowserRouter, Routes as Switch, Route } from "react-router-dom";
import Home from '../Pages/Home/Home';

const Routes= () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route  path="/" exact element={<Home/>}  />
                <Route />
                <Route />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes