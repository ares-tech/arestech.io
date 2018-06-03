import React from 'react'
import { FormattedMessage } from 'react-intl'
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

const getLink = (langKey, uri) => {
  if (langKey.toLowerCase() === 'en') {
    return `/${uri}`
  }
  return `/${langKey}/${uri}`
}

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
    const { langKey } = this.props
    return (
      <div id="page-top" className="menu-container">
        <Navbar className="ares-navbar container" color="light" light expand="md">
          <NavbarBrand href={getLink(langKey, '#page-top')}>
            <img className="navbar-logo" src="/logos/logo-1024-light.svg" alt="ARES" width="60" />
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav navbar>
              <NavItem>
                <NavLink href={getLink(langKey, '#introduction')}>
                  <FormattedMessage id="navigation.item.introduction" />
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href={getLink(langKey, '#products')}>
                  <FormattedMessage id="navigation.item.products" />
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href={getLink(langKey, '#team')}>
                  <FormattedMessage id="navigation.item.team" />
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href={getLink(langKey, '#roadmap')}>
                  <FormattedMessage id="navigation.item.roadmap" />
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href={getLink(langKey, '#media')}>
                  <FormattedMessage id="navigation.item.media" />
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href={getLink(langKey, '#partners')}>
                  <FormattedMessage id="navigation.item.partner" />
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href={getLink(langKey, '#token')}>
                  <FormattedMessage id="navigation.item.token" />
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href={getLink(langKey, '#usage')}>
                  <FormattedMessage id="navigation.item.usage" />
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href={getLink(langKey, '#contact-us')}>
                  <FormattedMessage id="navigation.item.contact.us" />
                </NavLink>
              </NavItem>
              <div className="language-switcher-container">
                <UncontrolledDropdown
                  className="language-switcher"
                  nav
                  inNavbar
                  onClick={e => {
                    e.stopPropagation()
                  }}
                >
                  <DropdownToggle nav caret>
                    {langKey.toUpperCase()}
                  </DropdownToggle>
                  <DropdownMenu right>
                    <DropdownItem>
                      <a href="/">English</a>
                    </DropdownItem>
                    <DropdownItem>
                      <a href="/zh">中文(zh-cn)</a>
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </div>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    )
  }
}

export default NavbarTop
