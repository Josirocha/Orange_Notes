import React from 'react'
import { BrowserRouter, Routes as Switch, Route } from "react-router-dom";
import Categories from '../Pages/Categories/Categories';

const Routes= () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route  path="/" exact element={<Categories/>}  />
                <Route />
                <Route />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes