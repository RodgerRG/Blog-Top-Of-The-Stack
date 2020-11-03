import React from 'react';
import { connect, ConnectedProps } from 'react-redux';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

const TopNav : React.FC = (props) => {

    return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
      <Navbar.Brand href="/">Top Of The Stack</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
        <Nav.Link href="/projects">Projects</Nav.Link>
        <Nav.Link href="/archives">Archives</Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link href="/about">About Us</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>)
  }

  export default TopNav;