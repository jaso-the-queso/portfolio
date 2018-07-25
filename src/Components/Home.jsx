import React, { Component } from "react";

export default class Home extends Component {
    render() {
        return (
            <div>
                {/* Opening */}
                <div className="row intro">
                    <img src="../pics/headshot.jpg" alt="headshot" className="w-100 h-100 col-6" />
                    <div className="col-5">
                        <h1 className="mt-5 intro-font">Freelance Developer</h1>
                        <h4 className="intro-font my-4">Birmingham, AL</h4>
                        <hr className="intro-hr my-4" />
                        <p className="intro-font my-5">I am a full stack developer / musician with a passion for designing and creating web applications.</p>
                        <p className="intro-font my-5">Currently looking for full-time work.</p>
                        <div className="row">
                            <a href="https://www.linkedin.com/in/jason-simons-120a92b9/" className="nav-link intro-link" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
                            <a href="https://github.com/jaso-the-queso" className="nav-link intro-link" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
                        </div>
                        <a href="../pics/resume.pdf" download="Jason_Simons_Resume"><span><button type="button" className="btn">Download Resume</button></span></a>
                    </div>
                </div>

                {/* Portfolio Section */}
                <div className="title row align-items-center justify-content-center">
                    <h1 className="title-font">
                        Portfolio.
                    </h1>
                </div>

                <div className="info">
                    <div className="container">

                        {/* Busy Corner Cheese */}
                        <div className="row justify-content-start pt-5 mb-5">
                            <div className="col-5">
                                <a href="https://busy-corner-cheese.herokuapp.com/" target="_blank" rel="noopener noreferrer"><img src="../pics/busy.png" alt="busy corner cheese screenshot" className="w-100 h-100 rounded" /></a>
                            </div>
                            <div className="col-7">
                                <h2 className="mb-5">
                                    Busy Corner Cheese & Provisions
                                </h2>
                                <p className="mb-5">
                                    Redesigned website that allows the owners to change menu item names, prices, and descriptions from their own dashboard.
                                </p>
                                <div className="ml-1 row align-items-end">
                                    <p className="p-2 mr-1 tool-tag">React</p>
                                    <p className="p-2 mr-1 tool-tag">Bootstrap</p>
                                    <p className="p-2 mr-1 tool-tag">Node.js</p>
                                    <p className="p-2 mr-1 tool-tag">Express.js</p>
                                    <p className="p-2 mr-1 tool-tag">MySQL</p>
                                </div>
                            </div>
                        </div>

                        {/* Magic City Woodworks */}
                        <div className="row justify-content-start py-5 mb-5">
                            <div className="col-5">
                                <a href="https://github.com/jaso-the-queso/magic-city-woodworks-demo" target="_blank" rel="noopener noreferrer"><img src="../pics/magic.png" alt="magic city woodworks screenshot" className="w-100 h-100 rounded" /></a>
                            </div>
                            <div className="col-7">
                                <h2 className="mb-5">
                                    Magic City Woodworks
                                </h2>
                                <p className="mb-5">
                                    Front end only demo made for Magic City Woodworks in Birmingham, AL.
                                </p>
                                <div className="ml-1 row align-items-end">
                                    <p className="p-2 mr-1 tool-tag">React</p>
                                    <p className="p-2 mr-1 tool-tag">MDBootstrap</p>
                                </div>
                            </div>
                        </div>

                        {/* Dis-Bot */}
                        <div className="row justify-content-start pb-5 mb-5">
                            <div className="col-5">
                                <a href="https://github.com/jaso-the-queso/dis-bot" target="_blank" rel="noopener noreferrer"><img src="../pics/dis.png" alt="dis bot screenshot" className="w-100 h-100 rounded" /></a>
                            </div>
                            <div className="col-7">
                                <h2 className="mb-5">
                                    Dis-Bot
                                </h2>
                                <p className="mb-5">
                                    Discord call and response bot used to make fun of my friends. Built purely for the fun of learning how to make a Discord bot.
                                </p>
                                <div className="ml-1 row align-items-end">
                                    <p className="p-2 mr-1 tool-tag">JavaScript</p>
                                    <p className="p-2 mr-1 tool-tag">Node.js</p>
                                </div>
                            </div>
                        </div>

                        {/* Dungeon Keeper */}
                        <div className="row justify-content-start pb-5">
                            <div className="col-5">
                                <a href="https://github.com/psugg92/GateKeeper" target="_blank" rel="noopener noreferrer"><img src="../pics/dungeon.png" alt="dis bot screenshot" className="w-100 h-100 rounded" /></a>
                            </div>
                            <div className="col-7">
                                <h2 className="mb-5">
                                    Dungeon Keeper
                                </h2>
                                <p className="mb-5">
                                    Dungeons and Dragons storyboarding application that allows Dungeon Masters to create and maintain enjoyable and immersive campaigns for their players. Spearheaded the UI design and front-end development.
                                </p>
                                <div className="ml-1 row align-items-end">
                                    <p className="p-2 mr-1 tool-tag">React</p>
                                    <p className="p-2 mr-1 tool-tag">Bootstrap</p>
                                    <p className="p-2 mr-1 tool-tag">Node.js</p>
                                    <p className="p-2 mr-1 tool-tag">Express.js</p>
                                    <p className="p-2 mr-1 tool-tag">MySQL</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Skills Section */}
                <div className="title row align-items-center justify-content-center">
                    <h1 className="title-font">
                        What I Use.
                    </h1>
                </div>
                <div className="info">
                    <div className="row justify-content-center">
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

                {/* Footer */}
                <div className="footer row align-items-center justify-content-center no-gutters">
                    <p className="mt-3">
                        Developed and designed by Jason Simons &copy; 2018
                    </p>
                </div>
            </div>
        );
    }
}