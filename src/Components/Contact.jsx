import React, { Component } from "react";
import { Input, Button, Fa } from "mdbreact";

export default class Contact extends Component {
    render() {
        return (
            <div>
                <div className="container mt-5 pt-5">

                    <h1>Let's Talk</h1>

                    <form>
                        <p className="h5 text-center mt-5 mb-4">Feel free to reach out to me</p>
                        <div className="row">
                            <div className="col-6">
                                <Input label="First name" icon="user" group type="email" validate error="wrong" success="right" />
                            </div>
                            <div className="col-6">
                                <Input label="Last name" group type="email" validate error="wrong" success="right" />
                            </div>
                        </div>
                        <Input label="Your email" icon="envelope" group type="email" validate error="wrong" success="right" />
                        <Input type="textarea" label="Your message" icon="pencil-alt" />
                        <div className="text-center">
                            <Button color="blue-grey">Send <Fa icon="paper-plane" className="ml-1" /></Button>
                        </div>
                    </form>

                </div>

                <div className="jumbotron jumbotron-fluid mt-5">
                    <div className="container">
                        <h3>Social</h3>
                        <div className="row mt-5">
                            <div className="col-4 text-center">
                                <a href="https://www.linkedin.com/in/jason-simons-120a92b9/" rel="noopener noreferrer" target="_blank">
                                    <i className="fab fa-linkedin-in fa-4x hoverable rounded-circle"></i>
                                </a>
                            </div>
                            <div className="col-4 text-center">
                                <a href="https://www.instagram.com/jaso_the_queso_2.0/" rel="noopener noreferrer" target="_blank">
                                    <i className="fab fa-instagram fa-4x hoverable rounded-circle"></i>
                                </a>                            </div>
                            <div className="col-4 text-center">
                                <a href="https://twitter.com/jasoncsimons" rel="noopener noreferrer" target="_blank">
                                    <i className="fab fa-twitter fa-4x hoverable rounded-circle"></i>
                                </a>                            </div>
                        </div>
                    </div>

                </div>

            </div>
        );
    }
}