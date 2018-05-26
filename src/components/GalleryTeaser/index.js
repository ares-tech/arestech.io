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
            Follow our&nbsp;
            <a href="https://medium.com/ares-tech" rel="noopener noreferrer" target="_blank" style={{ color: '#ce38da' }}>blog</a>,&nbsp;
            <a href="https://t.me/ares_tech" rel="noopener noreferrer" target="_blank" style={{ color: '#ce38da' }}>community</a>&nbsp;or&nbsp;
            <a href="https://www.youtube.com/channel/UCV_O9CKVKr4-KJVC-v8FcVw" rel="noopener noreferrer" target="_blank" style={{ color: '#ce38da' }}>Youtube</a>&nbsp;to get latest news!
          </p>
        </Col>
      </Row>
      {chunk(pictures, 3).map((row, index) => (
        <Row key={index}>
          {row.map(pic => (
            <ImageTeaser key={pic.title} src={pic.src} alt={pic.title} title={pic.title} desc={pic.description} link={pic.link} />
          ))}
        </Row>
      ))}
    </Container>
  </div>
)

export default GallaryTeaser
