import React from 'react'
import { Navbar, Nav, NavItem } from 'react-bootstrap'
import './index.css'

const NavbarTop = () => (
  <Navbar className="ares-navbar">
    <Navbar.Header>
      <Navbar.Brand>
        <a href="#brand">Ares</a>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav>
        <NavItem eventKey={1} href="#introduction">
          Introduction
        </NavItem>
        <NavItem eventKey={2} href="#ecosystem">
          Ecosystem
        </NavItem>
        <NavItem eventKey={2} href="#team">
          Team
        </NavItem>
        <NavItem eventKey={2} href="#roadmap">
          Roadmap
        </NavItem>
        <NavItem eventKey={2} href="#media">
          Media
        </NavItem>
        <NavItem eventKey={2} href="#tokenSale">
          Token Sale
        </NavItem>
        <NavItem eventKey={2} href="#useOfFunds">
          Use of Funds
        </NavItem>
        <NavItem eventKey={2} href="#contactUs">
          Contact Us
        </NavItem>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
)

export default NavbarTop
