/* @flow */
import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import { FormattedMessage } from 'react-intl'
import { chunk } from 'lodash'
import pictures from './pictures'
import ImageTeaser from '../ImageTeaser'

const FormatIntlLink = ({ id, link }) => (
  <FormattedMessage id={id}>
    {name => (
      <a href={link} rel="noopener noreferrer" target="_blank" style={{ color: '#ce38da' }}>
        {name}
      </a>
    )}
  </FormattedMessage>
)

const GallaryTeaser = () => (
  <div className="bg-light">
    <Container className="py-5 p-md-5">
      <Row>
        <Col>
          <h1 className="display-2 headline" style={{ color: '#ff6427', fontWeight: 'bold' }}>
            <FormattedMessage id="update.title" />
          </h1>
          <p className="lead" style={{ color: '#ff6427' }}>
            <FormattedMessage
              id="update.subtitle"
              values={{
                blog: <FormatIntlLink id="update.subtitle.link.blog" link="https://medium.com/ares-tech" />,
                community: <FormatIntlLink id="update.subtitle.link.community" link="https://t.me/ares_tech" />,
                or: <FormattedMessage id="general.or" />,
                youtube: (
                  <FormatIntlLink
                    id="update.subtitle.link.youtube"
                    link="https://www.youtube.com/channel/UCV_O9CKVKr4-KJVC-v8FcVw"
                  />
                ),
              }}
            />
          </p>
        </Col>
      </Row>
      {chunk(pictures, 3).map((row, index) => (
        // eslint-disable-next-line
        <Row key={index}>
          {row.map(pic => (
            <ImageTeaser
              key={pic.src}
              src={pic.src}
              alt={pic.title}
              title={pic.title}
              desc={pic.description}
              link={pic.link}
            />
          ))}
        </Row>
      ))}
    </Container>
  </div>
)

export default GallaryTeaser
