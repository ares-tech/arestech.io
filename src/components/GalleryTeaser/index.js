import React from 'react'
import ImageTeaser from '../ImageTeaser'
import { Container, Row, Col, Card, CardBody, CardText, CardTitle, CardSubtitle, CardLink } from 'reactstrap'
import pictures from './pictures.json'
import { chunk } from 'lodash'

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
      {chunk(pictures, 3).map((row, i) => (
        <Row key={i}>
          {row.map((pic, j) => (
            <ImageTeaser key={j} src={pic.src} alt={pic.title} title={pic.title} desc={pic.description} />
          ))}
        </Row>
      ))}
    </Container>
  </div>
)

export default GallaryTeaser
