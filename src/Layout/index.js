import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { NavLink, Link } from 'react-router-dom';
import './Layout.css'

class Layout extends Component{
    render(){
        return (
            <div>
                <Navbar expand="lg" bg="light">
                    <Navbar.Brand>
                        <Link className="navbar-brand-link" to="/">My First React App</Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <NavLink exact className="nav-link" activeClassName="active-nav-link" to="/button">
                                Button         
                            </NavLink>
                            <NavLink exact className="nav-link" activeClassName="active-nav-link" to="/number-app">
                                Number App       
                            </NavLink>
                            <NavLink exact className="nav-link" activeClassName="active-nav-link" to="/rolldice">
                                Dice Roller    
                            </NavLink>
                            <NavLink exact className="nav-link" activeClassName="active-nav-link" to="/lottery">
                                Lottery App          
                            </NavLink>
                            <NavLink exact className="nav-link" activeClassName="active-nav-link" to="/coinflipper">
                                Coin Flipper
                            </NavLink>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                {this.props.children}
            </div>
        )
    }
}

export default Layout;