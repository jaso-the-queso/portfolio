import React, { Component } from "react";
import Fade from 'react-reveal';

export default class Home extends Component {
    render() {
        return (
            <div>
                {/* Opening */}

                <div className="row intro">
                    <Fade>
                        <img src="../pics/headshot.jpg" alt="headshot" className="w-100 h-100 rounded col-xs-7 col-sm-7 col-md-7 col-lg-7" />
                    </Fade>
                    <Fade right>
                        <div className="col-xs-5 col-sm-5 col-md-5 col-lg-5 info-p">
                            <h1 className="my-5 intro-font">Jason Simons</h1>
                            <h4 className="mt-5 intro-font">Freelance Developer</h4>
                            <h5 className="intro-font my-4">Birmingham, AL</h5>
                            <hr className="intro-hr my-4" />
                            <p className="intro-font my-5">I am a full stack developer / musician with a passion for designing and creating web applications.</p>
                            <p className="intro-font my-5">Currently looking for full-time work.</p>
                            <div className="row">
                                <a href="https://www.linkedin.com/in/jason-simons-120a92b9/" className="nav-link intro-link" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
                                <a href="https://github.com/jaso-the-queso" className="nav-link intro-link" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
                            </div>
                            <a href="../pics/resume.pdf" download="Jason_Simons_Resume"><span><button type="button" className="btn">Download Resume</button></span></a>
                        </div>
                    </Fade>
                </div>

                {/* About Me Section */}
                <div className="title row align-items-center justify-content-center">
                    <Fade>
                        <h1 className="title-font">
                            About Me.
                        </h1>
                    </Fade>
                </div>
                <div className="about">
                    <div className="row justify-content-center">
                        <Fade>
                            <div className="col-xs-7 col-sm-7 col-md-7 col-lg-7 my-5 py-5">
                                <Fade left>
                                    <h1 className="my-4">I want to create applications for you.</h1>
                                    <hr className="intro-hr" />
                                </Fade>
                                <Fade left>
                                    <p className="my-5">
                                        Hello, my name is Jason Simons and I am a freelance developer.
                                        For most of my life, my passion has been making music and playing drums.
                                        I spent six years of my life in Nashville, TN as a freelance drummer and bassist.
                                        During those years, I recorded in studios, played in bars, toured with friends, and instructed high school drum lines.
                                        Whenever I wasn't playing the drums, I was working as a barista and teaching myself HTML, CSS, and JavaScript.
                                        While I very much enjoyed playing music, I progressively developed a sour attitude toward the music industry and decided that I wanted a change in career.
                                        It was then that I decided to begin my transition over to my growing passion, which was coding.
                                    </p>
                                </Fade>
                                <Fade left>
                                    <p className="my-5">
                                        Soon after, I moved to Birmingham, AL and found another job as a barista at Woodlawn Cycle Cafe.
                                        I worked there for half a year, all the while saving money and continuing my practice of coding.
                                        Once I saved enough money, I decided to accelerate my learning and enroll in the local coding bootcamp, Covalence.
                                        During this time, I solidified my knowledge of HTML, CSS, and Javascript while also learing new technologies such as React, React Native, Node.js, Express.js, MySQL, and Heroku deployment.
                                        Ever since graduation near the end of March 2018, I have spent my days improving myself as a programmer by taking on projects from local clients in Birmingham.
                                    </p>
                                </Fade>
                                <Fade left>
                                    <p className="my-5">
                                        Currently, I am looking for full-time work.
                                    </p>
                                </Fade>
                            </div>
                            <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4 mt-5 pt-5">
                                <h1 className="text-center">
                                    Studying
                                </h1>
                            </div>
                        </Fade>
                    </div>
                </div>

                {/* Portfolio Section */}
                <div className="title row align-items-center justify-content-center">
                    <Fade>
                        <h1 className="title-font">
                            Portfolio.
                        </h1>
                    </Fade>
                </div>

                <div className="info">
                    <div className="container py-5">

                        {/* Busy Corner Cheese */}
                        <div className="row justify-content-start pt-5 mb-5">
                            <Fade left>
                                <div className="col-xs-5 col-sm-5 col-md-5 col-lg-5">
                                    <a href="https://busy-corner-cheese.herokuapp.com/" target="_blank" rel="noopener noreferrer"><img src="../pics/busy.png" alt="busy corner cheese screenshot" className="w-100 h-100 rounded" /></a>
                                </div>
                            </Fade>
                            <Fade right>
                                <div className="col-xs-7 col-sm-7 col-md-7 col-lg-7 info-p">
                                    <h2 className="mb-5">
                                        Busy Corner Cheese & Provisions
                                </h2>
                                    <p className="mb-5">
                                        Redesigned website that allows the owners to change menu item names, prices, and descriptions from their own dashboard.
                                </p>
                                    <div className="ml-1 row align-items-end info-p">
                                        <p className="p-2 mr-1 tool-tag">React</p>
                                        <p className="p-2 mr-1 tool-tag">Bootstrap</p>
                                        <p className="p-2 mr-1 tool-tag">Node.js</p>
                                        <p className="p-2 mr-1 tool-tag">Express.js</p>
                                        <p className="p-2 mr-1 tool-tag">MySQL</p>
                                    </div>
                                </div>
                            </Fade>
                        </div>


                        {/* Magic City Woodworks */}

                        <div className="row justify-content-start py-5 mb-5">
                            <Fade left>
                                <div className="col-xs-5 col-sm-5 col-md-5 col-lg-5">
                                    <a href="https://github.com/jaso-the-queso/magic-city-woodworks-demo" target="_blank" rel="noopener noreferrer"><img src="../pics/magic.png" alt="magic city woodworks screenshot" className="w-100 h-100 rounded" /></a>
                                </div>
                            </Fade>
                            <Fade right>
                                <div className="col-xs-7 col-sm-7 col-md-7 col-lg-7 info-p">
                                    <h2 className="mb-5">
                                        Magic City Woodworks
                                </h2>
                                    <p className="mb-5">
                                        Front end only demo made for Magic City Woodworks in Birmingham, AL.
                                </p>
                                    <div className="ml-1 row align-items-end info-p">
                                        <p className="p-2 mr-1 tool-tag">React</p>
                                        <p className="p-2 mr-1 tool-tag">MDBootstrap</p>
                                    </div>
                                </div>
                            </Fade>
                        </div>


                        {/* Dis-Bot */}

                        <div className="row justify-content-start pb-5 mb-5">
                            <Fade left>
                                <div className="col-xs-5 col-sm-5 col-md-5 col-lg-5">
                                    <a href="https://github.com/jaso-the-queso/dis-bot" target="_blank" rel="noopener noreferrer"><img src="../pics/dis.png" alt="dis bot screenshot" className="w-100 h-100 rounded" /></a>
                                </div>
                            </Fade>
                            <Fade right>
                                <div className="col-xs-7 col-sm-7 col-md-7 col-lg-7 info-p">
                                    <h2 className="mb-5">
                                        Dis-Bot
                                </h2>
                                    <p className="mb-5">
                                        Discord call and response bot used to make fun of my friends. Built purely for the fun of learning how to make a Discord bot.
                                </p>
                                    <div className="ml-1 row align-items-end info-p">
                                        <p className="p-2 mr-1 tool-tag">JavaScript</p>
                                        <p className="p-2 mr-1 tool-tag">Node.js</p>
                                    </div>
                                </div>
                            </Fade>
                        </div>


                        {/* Dungeon Keeper */}

                        <div className="row justify-content-start pb-5">
                            <Fade left>
                                <div className="col-xs-5 col-sm-5 col-md-5 col-lg-5">
                                    <a href="https://github.com/psugg92/GateKeeper" target="_blank" rel="noopener noreferrer"><img src="../pics/dungeon.png" alt="dis bot screenshot" className="w-100 h-100 rounded" /></a>
                                </div>
                            </Fade>
                            <Fade right>
                                <div className="col-xs-7 col-sm-7 col-md-7 col-lg-7 info-p">
                                    <h2 className="mb-5">
                                        Dungeon Keeper
                                    </h2>
                                    <p className="mb-5">
                                        Dungeons and Dragons storyboarding application that allows Dungeon Masters to create and maintain enjoyable and immersive campaigns for their players. Spearheaded the UI design and front-end development.
                                    </p>
                                    <div className="ml-1 row align-items-end info-p">
                                        <p className="p-2 mr-1 tool-tag">React</p>
                                        <p className="p-2 mr-1 tool-tag">Bootstrap</p>
                                        <p className="p-2 mr-1 tool-tag">Node.js</p>
                                        <p className="p-2 mr-1 tool-tag">Express.js</p>
                                        <p className="p-2 mr-1 tool-tag">MySQL</p>
                                    </div>
                                </div>
                            </Fade>
                        </div>

                    </div>
                </div>

                {/* Skills Section */}
                <div className="title row align-items-center justify-content-center">
                    <Fade>
                        <h1 className="title-font">
                            What I Use.
                        </h1>
                    </Fade>
                </div>
                <div className="info">
                    <div className="row justify-content-center">
                        <Fade>
                            <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2 my-5 py-5 mx-5">
                                <h1 className="text-center">
                                    Skills
                            </h1>
                                <hr className="intro-hr my-4 text-center" />
                                <ul className="list-unstyled">
                                    <Fade left>
                                        <li className="my-1">HTML5</li>
                                    </Fade>
                                    <Fade left>
                                        <li className="my-1">CSS3</li>
                                    </Fade>
                                    <Fade left>
                                        <li className="my-1">JavaScript</li>
                                    </Fade>
                                    <Fade left>
                                        <li className="my-1">React</li>
                                    </Fade>
                                    <Fade left>
                                        <li className="my-1">React Native</li>
                                    </Fade>
                                    <Fade left>
                                        <li className="my-1">Node.js</li>
                                    </Fade>
                                    <Fade left>
                                        <li className="my-1">Express.js</li>
                                    </Fade>
                                    <Fade left>
                                        <li className="my-1">MySQL</li>
                                    </Fade>
                                    <Fade left>
                                        <li className="my-1">Bootstrap</li>
                                    </Fade>
                                    <Fade left>
                                        <li className="my-1">MDBootstrap</li>
                                    </Fade>
                                </ul>
                            </div>
                            <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2 mt-5 pt-5 mx-5">
                                <h1 className="text-center">Studying</h1>
                                <hr className="intro-hr my-4 text-center" />
                                <ul className="list-unstyled">
                                    <Fade right>
                                        <li className="my-1">Ruby</li>
                                    </Fade>
                                    <Fade right>
                                        <li className="my-1">Ruby on Rails</li>
                                    </Fade>
                                </ul>
                            </div>
                        </Fade>
                    </div>
                </div>

                {/* Footer */}
                <div className="footer row align-items-center justify-content-center">
                    <p className="pt-2">
                        Developed and designed by Jason Simons &copy; 2018
                    </p>
                </div>
            </div>
        );
    }
}