import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

import './styles.css' 

const TheNavegation = (props) => {

    return (
    <Navbar bg="primary" expand="lg" fixed="top"  id="sideNav">
        <Navbar.Brand>
            <Link to="/">
            <span className="d-block d-lg-none">Clarence Taylor</span>
            <span className="d-none d-lg-block"><img className="img-fluid img-profile rounded-circle mx-auto mb-2" src="img/profile.jpg" alt="" /></span>
            </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
                <Link className={props.match.path == "/about" || props.match.path == "/" ? "nav-link active" : "nav-link"} to="/about">About</Link>
                <Link className={props.match.path == "/experience" ? "nav-link active" : "nav-link"} to="/experience">Experience</Link>
                <Link className={props.match.path == "/education" ? "nav-link active" : "nav-link"} to="/education">Education</Link>
                <Link className={props.match.path == "/skills" ? "nav-link active" : "nav-link"} to="/skills">Skills</Link>
                <Link className={props.match.path == "/interests" ? "nav-link active" : "nav-link"} to="/interests">Interests</Link>
                <Link className={props.match.path == "/awards" ? "nav-link active" : "nav-link"} to="/awards">Awards</Link>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
    )
}

export default TheNavegation