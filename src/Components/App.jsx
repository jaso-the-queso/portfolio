import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

import Navbar from "./Navbar";
import Footer from "./Footer";

import Home from "./Home";
import Portfolio from "./Portfolio";
import Contact from "./Contact";

export default class App extends Component {
    render() {
        return (
            <Router>
                <Fragment>
                    <Navbar />
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/portfolio" component={Portfolio} />
                        <Route exact path="/contact" component={Contact} />
                    </Switch>
                    <Footer />
                </Fragment>
            </Router>
        );
    }
}