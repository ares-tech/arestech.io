/* @flow */
import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import { FormattedMessage } from 'react-intl'
import { chunk } from 'lodash'
import pictures from './pictures'
import ImageTeaser from '../ImageTeaser'

const FormatIntlLink = ({ id }) => (
  <FormattedMessage id={id}>
    {({ name, link }) => (
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
                blog: <FormatIntlLink id="update.subtitle.link.blog" />,
                community: <FormatIntlLink id="update.subtitle.link.community" />,
                or: <FormattedMessage id="general.or" />,
                youtube: <FormatIntlLink id="update.subtitle.link.youtube" />,
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
              key={pic.title}
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
