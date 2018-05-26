import React from 'react'
import { NavLink, Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem } from 'reactstrap'
import './index.css'

class NavbarTop extends React.Component {
  constructor(props) {
    super(props)

    this.toggle = this.toggle.bind(this)
    this.state = {
      isOpen: false,
    }
  }

  openNav = () => {
    document.addEventListener("click", this.closeNav);
    this.setState({ isOpen: true });
  }

  closeNav = () => {
    document.removeEventListener("click", this.closeNav);
    this.setState({ isOpen: false });
  }
  
  toggle() {
    if (this.state.isOpen) {
      this.closeNav();
    } else {
      this.openNav();
    }
  }

  render() {
    return (
      <div className="menu-container">
        <Navbar className="ares-navbar container" color="light" light expand="md">
          <NavbarBrand href="/">
            <img className="navbar-logo" src="logos/logo-1024-light.svg" alt="ARES" width="60" />
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav navbar>
              <NavItem>
                <NavLink href="/#introduction">Introduction</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/#ecosystem">Products</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/#team">Team</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/#roadmap">Roadmap</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/#media">Media</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/#partners">Partners</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/#token-sale">Token Sale</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/#contact-us">Contact Us</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    )
  }
}

export default NavbarTop
