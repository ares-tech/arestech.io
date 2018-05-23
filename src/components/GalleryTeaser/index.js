import React from 'react'
import { Container, Row, Col, Card, CardBody, CardText, CardTitle, CardSubtitle, CardLink } from 'reactstrap'
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
              Follow our <a href="https://medium.com/ares-tech" target="_blank" style={{ color: '#ce38da' }}>blog</a> and <a href="https://t.me/ares_tech" target="_blank" style={{ color: '#ce38da' }}>community</a> to get latest news!
          </p>
        </Col>
      </Row>
      {chunk(pictures, 3).map((row, i) => (
        <Row key={i}>
          {row.map((pic, j) => (
            <ImageTeaser key={j} src={pic.src} alt={pic.title} title={pic.title} desc={pic.description} link={pic.reflink}/>
          ))}
        </Row>
      ))}
    </Container>
  </div>
)

export default GallaryTeaser
