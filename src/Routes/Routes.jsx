import React from 'react'
import { BrowserRouter, Routes as Switch, Route } from "react-router-dom";
import Categories from '../Pages/Categories/Categories';
import Notes from '../Pages/Notes/Notes';

const Routes= () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route  path="/" exact element={<Categories/>}  />
                <Route path="notes/:id" exact element={<Notes/>}/>
                <Route />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes