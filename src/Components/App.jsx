import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

import Home from "./Home";

export default class App extends Component {
    render() {
        return (
            <Router>
                <Fragment>
                    <Switch>
                        <Route exact path="/" component={Home} />
                    </Switch>
                </Fragment>
            </Router>
        );
    }
}