import React, { Component } from "react";

export default class Home extends Component {
    render() {
        return (
            <div>
                <div className="row intro">
                    <img src="../pics/headshot.jpg" alt="headshot" className="w-100 h-100 col-6" />
                    <div className="col-5">
                        <h1 className="mt-5 intro-font">Freelance Developer</h1>
                        <h4 className="intro-font my-4">Birmingham, AL</h4>
                        <hr className="intro-hr my-4" />
                        <p className="intro-font my-5">I am a full stack developer / musician with a passion for designing and creating web applications.</p>
                        <p className="intro-font my-5">Currently looking for full-time work.</p>
                        <div className="row">
                            <a href="" className="nav-link intro-link" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
                            <a href="" className="nav-link intro-link" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}