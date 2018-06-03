import React from 'react'
import { Button, Container } from 'reactstrap'
import { FormattedMessage } from 'react-intl'
import { Timeline } from 'react-twitter-widgets'
import './index.css'
import socialMedias from './socialMedias'

const Contact = () => (
  <div
    id="contact-us"
    className="contact-section"
    style={{ paddingTop: '10rem', color: '#9B9B9B', position: 'relative' }}
  >
    <Container className="content-container">
      <div className="left-pane">
        <div style={{ marginBottom: '5rem' }}>
          <h1 className="display-2 headline" style={{ color: '#fff', fontWeight: 'bold' }}>
            <FormattedMessage id="contact.title" />
          </h1>
          <p className="lead" style={{ color: '#fff' }}>
            <FormattedMessage id="contact.subtitle" />
          </p>
        </div>
        <div className="social-media pl-1">
          <p style={{ margin: 0, fontWeight: 'bold', fontSize: 'larger' }}>
            <FormattedMessage id="contact.follow.us" />
          </p>
          {socialMedias.map(({ name, link, className }) => (
            <a className="social-media-icon" key={name} href={link} alt={name} target="_blank">
              <i className={className} />
            </a>
          ))}
          <div className="pt-2">
            <a
              href="https://drive.google.com/drive/folders/14-JhpPGauii_8lcPyOUNzekS-EQSMEsP?usp=sharing"
              rel="noopener noreferrer"
              target="_blank"
              style={{ color: '#ce38da' }}
            >
              <Button className="main__button">
                <i className="far fa-newspaper" />
                <span style={{ paddingLeft: 10 }}>
                  <FormattedMessage id="contact.get.press.kit" />
                </span>
              </Button>
            </a>
          </div>
        </div>
      </div>
      <div className="right-pane">
        <Timeline
          dataSource={{
            sourceType: 'profile',
            screenName: 'arestech_io',
          }}
          options={{
            username: 'arestech_io',
            height: '500',
          }}
        />
      </div>
    </Container>
    <div className="contact-shape contact-shape-1">
      <img src="/images/main-shape-1.png" width="100%" height="100%" alt="" />
    </div>
    <div className="contact-shape contact-shape-2">
      <img src="/images/main-shape-2.png" width="100%" height="100%" alt="" />
    </div>
    <div className="contact-shape contact-shape-3">
      <img src="/images/main-shape-3.png" width="100%" height="100%" alt="" />
    </div>
    <div className="contact-shape contact-shape-4">
      <img src="/images/main-shape-2.png" width="100%" height="100%" alt="" />
    </div>
  </div>
)

export default Contact
