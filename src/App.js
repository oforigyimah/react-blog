import Navbar from "./Navbar";
import Home from "./home";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Create from "./Create";
import BlogDetails from "./BlogDetails";
import React from "react";
import NotFound from "./NotFound";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Navbar/>
                <div className="content">
                    <Switch>
                        <Route exact path="/">
                            <Home></Home>
                        </Route>
                        <Route path={'/create'}>
                            <Create/>
                        </Route>
                        <Route path={'/blogs/:id'}>
                            <BlogDetails/>
                        </Route>
                        <Route path={'*'}>
                            <NotFound/>
                        </Route>
                    </Switch>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
