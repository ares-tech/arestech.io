import React from 'react'
import {
  NavLink,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap'
import './index.css'

class NavbarTop extends React.Component {
  state = {
    isOpen: false,
  }

  openNav = () => {
    this.setState({ isOpen: true })
  }

  closeNav = () => {
    this.setState({ isOpen: false })
  }

  toggle = () => {
    if (this.state.isOpen) {
      this.closeNav()
    } else {
      this.openNav()
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
                <NavLink href="/#products">Products</NavLink>
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
                <NavLink href="/#token">Token</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/#contact-us">Contact Us</NavLink>
              </NavItem>
              <UncontrolledDropdown
                nav
                inNavbar
                onClick={e => {
                  e.stopPropagation()
                }}
              >
                <DropdownToggle nav caret>
                  Language
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    <a href="/">English</a>
                  </DropdownItem>
                  <DropdownItem>
                    <a href="/zh">中文</a>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    )
  }
}

export default NavbarTop
