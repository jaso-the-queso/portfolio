import React, { Component } from 'react';
import { Navbar, NavbarBrand, NavbarNav, NavbarToggler, Collapse, Container, NavItem, NavLink } from 'mdbreact';

export default class Nav extends Component {
    constructor(props) {
        super(props);
        this.state = {
            collapse: false,
            isWideEnough: false,
            dropdownOpen: false
        };
        this.onClick = this.onClick.bind(this);
        this.toggle = this.toggle.bind(this);
    }

    onClick() {
        this.setState({
            collapse: !this.state.collapse,
        });
    }

    toggle() {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        });
    }

    render() {
        return (
            <div>
                <Navbar color="special-color-dark" dark expand="md" fixed="top" scrolling>
                    <Container>
                        <NavbarBrand href="/">
                            <h3>J / S</h3>
                        </NavbarBrand>
                        {!this.state.isWideEnough && <NavbarToggler onClick={this.onClick} />}
                        <Collapse isOpen={this.state.collapse} navbar>
                            <NavbarNav right>
                                <NavItem className="mr-2">
                                    <NavLink to="/">HOME</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink to="#" className="mr-2">RESUME</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink to="/portfolio" className="mr-2">PORTFOLIO</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink to="/contact" className="mr-5">CONTACT</NavLink>
                                </NavItem>
                                <NavItem>
                                    <a href="https://www.linkedin.com/in/jason-simons-120a92b9/" rel="noopener noreferrer" target="_blank" className="nav-link m-">
                                        <i className="fab fa-linkedin-in"></i>
                                    </a>
                                </NavItem>
                                <NavItem>
                                    <a href="https://www.instagram.com/jaso_the_queso_2.0/" rel="noopener noreferrer" target="_blank" className="nav-link">
                                        <i className="fab fa-instagram"></i>
                                    </a>
                                </NavItem>
                                <NavItem>
                                    <a href="https://twitter.com/jasoncsimons" rel="noopener noreferrer" target="_blank" className="nav-link">
                                        <i className="fab fa-twitter"></i>
                                    </a>
                                </NavItem>
                            </NavbarNav>
                        </Collapse>
                    </Container>
                </Navbar>
            </div>
        );
    }
}
