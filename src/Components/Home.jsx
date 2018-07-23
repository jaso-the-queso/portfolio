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
                <div className="title row align-items-center justify-content-center">
                    <h1 className="title-font">
                        Portfolio.
                    </h1>
                </div>
                <div className="container-fluid info">
                    <div className="container">
                        <div className="row justify-content-start pt-5">
                            <div className="col-5">
                                <a href="https://busy-corner-cheese.herokuapp.com/" target="_blank" rel="noopener noreferrer"><img src="../pics/busy.png" alt="busy corner cheese screenshot" className="w-100 h-100 rounded" /></a>
                            </div>
                            <div className="col-7">
                                <h2>
                                    Busy Corner Cheese & Provisions
                                </h2>
                            </div>
                        </div>

                        <div className="row justify-content-start py-5">
                            <div className="col-5">
                                <a href="https://github.com/jaso-the-queso/magic-city-woodworks-demo" target="_blank" rel="noopener noreferrer"><img src="../pics/magic.png" alt="magic city woodworks screenshot" className="w-100 h-100 rounded" /></a>
                            </div>
                            <div className="col-7">
                                <h2>
                                    Magic City Woodworks
                                </h2>
                            </div>
                        </div>

                        <div className="row justify-content-start pb-5">
                            <div className="col-5">
                                <a href="https://github.com/jaso-the-queso/dis-bot" target="_blank" rel="noopener noreferrer"><img src="../pics/dis.png" alt="dis bot screenshot" className="w-100 h-100 rounded" /></a>
                            </div>
                            <div className="col-7">
                                <h2>
                                    Dis-Bot
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="title row align-items-center justify-content-center">
                    <h1 className="title-font">
                        What I Use.
                    </h1>
                </div>
                <div className="row info justify-content-center">
                    <div className="col-2 mt-5 pt-5 mx-5">
                        <h1 className="text-center">
                            Skills
                        </h1>
                        <hr className="intro-hr my-4 text-center" />
                        <ul className="list-unstyled">
                            <li className="my-1">HTML5</li>
                            <li className="my-1">CSS3</li>
                            <li className="my-1">JavaScript</li>
                            <li className="my-1">React</li>
                            <li className="my-1">React Native</li>
                            <li className="my-1">Node.js</li>
                            <li className="my-1">Express.js</li>
                            <li className="my-1">MySQL</li>
                            <li className="my-1">Bootstrap</li>
                            <li className="my-1">MDBootstrap</li>
                        </ul>
                    </div>
                    <div className="col-2 mt-5 pt-5 mx-5">
                        <h1 className="text-center">Studying</h1>
                        <hr className="intro-hr my-4 text-center" />
                        <ul className="list-unstyled">
                            <li className="my-1">Ruby</li>
                            <li className="my-1">Ruby on Rails</li>
                        </ul>
                    </div>
                </div>
            </div>                
        );
    }
}