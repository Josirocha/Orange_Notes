import React from 'react'
import { BrowserRouter, Routes as Switch, Route } from "react-router-dom";
import Categorias from '../Pages/Home/Categorias';

const Routes= () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route  path="/" exact element={<Categorias/>}  />
                <Route />
                <Route />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes