import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import { chunk } from 'lodash'
import pictures from './pictures'
import ImageTeaser from '../ImageTeaser'

const GallaryTeaser = () => (
  <div className="bg-light">
    <Container className="py-5 p-md-5">
      <Row>
        <Col>
          <h1 className="display-2 headline" style={{ color: '#ff6427', fontWeight: 'bold' }}>
            Latest Updates
          </h1>
          <p className="lead" style={{ color: '#ff6427' }}>
            Ares is Scalable Blockchain Social Gaming Network.
          </p>
        </Col>
      </Row>
      {chunk(pictures, 3).map((row, index) => (
        // eslint-disable-next-line
        <Row key={index} >
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
