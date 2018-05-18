import React, { Component } from 'react'
import { Container, Button } from 'reactstrap'
import './Footer.css'

class Footer extends Component {
  render() {
    const { config } = this.props
    const { copyright, address } = config

    return (
      <footer className="footer">
        <Container>
          <div className="notice-container">
            <div className="address-container">
              <p style={{ margin: 0 }}>{copyright}</p>
              <p>{address}</p>
              <span>
                <a href="">Nutzungsbedingungen</a>
                <span> | </span>
                <a href="">Datenschutz</a>
                <span> | </span>
                <a href="">Impressum</a>
              </span>
            </div>
            <div>
              <p>Get our Newsletter direct to your inbox</p>
              <a href="http://gem.godaddy.com/signups/388099/join">
                <Button className="newsletter-subscribe" block>
                  Subscribe
                </Button>
              </a>
            </div>
          </div>
        </Container>
      </footer>
    )
  }
}

export default Footer
