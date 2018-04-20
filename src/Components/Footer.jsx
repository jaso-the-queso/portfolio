import React, { Component } from 'react';
import { Link } from "react-router-dom"
import { Col, Container, Row, Footer } from 'mdbreact';

export default class FooterPage extends Component {
    render(){
        return(
            <Footer color="special-color-dark" className="font-small pt-4 mt-4">
                <Container className="text-center">
                    <div className="row justify-content-around my-5">
                        <Link to="">HOME</Link>
                        <Link to="">RESUME</Link>
                        <Link to="">PORTFOLIO</Link>
                        <Link to="">CONTACT</Link>
                    </div>
                    <div className="row justify-content-center my-4">
                        <a href="https://www.linkedin.com/in/jason-simons-120a92b9/" rel="noopener noreferrer" target="_blank" className="nav-link m-2">
                            <i className="fab fa-linkedin-in"></i>
                        </a>                        
                        <a href="https://www.instagram.com/jaso_the_queso_2.0/" rel="noopener noreferrer" target="_blank" className="nav-link m-2">
                            <i className="fab fa-instagram"></i>
                        </a>                         
                        <a href="https://twitter.com/jasoncsimons" rel="noopener noreferrer" target="_blank" className="nav-link m-2">
                            <i className="fab fa-twitter"></i>
                        </a>                     
                    </div>
                </Container>
                <div className="footer-copyright text-center">
                    <Container fluid>
                        &copy; {(new Date().getFullYear())} <p className="d-inline">Jason Simons</p>
                    </Container>
                </div>
            </Footer>
        );
    }
}