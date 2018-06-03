import React, { Component } from 'react'
import { Container, Button } from 'reactstrap'
import { FormattedMessage } from 'react-intl'
import './Footer.css'

const getLink = (langKey, uri) => {
  if (langKey.toLowerCase() === 'en') {
    return `/${uri}/`
  }
  return `/${langKey}/${uri}/`
}

class Footer extends Component {
  render() {
    const { config, langKey } = this.props
    const { copyright, address } = config

    return (
      <footer className="footer">
        <Container>
          <div className="notice-container">
            <div className="address-container">
              <p style={{ margin: 0 }}>{copyright}</p>
              <p>{address}</p>
              <span>
                <a href={getLink(langKey, 'term-of-use')}>
                  <FormattedMessage id="footer.term.of.use" />
                </a>
                <span> | </span>
                <a href={getLink(langKey, 'privacy')}>
                  <FormattedMessage id="footer.privacy" />
                </a>
                <span> | </span>
                <a href={getLink(langKey, 'imprint')}>
                  <FormattedMessage id="footer.imprint" />
                </a>
              </span>
            </div>
            <div>
              <p>
                <FormattedMessage id="footer.newletter.promotion.text" />
              </p>
              <a href="http://gem.godaddy.com/signups/388099/join">
                <Button className="newsletter-subscribe" block>
                  <FormattedMessage id="footer.newletter.button.text" />
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
