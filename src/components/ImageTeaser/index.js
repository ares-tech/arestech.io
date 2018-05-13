import React from 'react'
import { Col, Card, CardBody, CardTitle, CardSubtitle } from 'reactstrap'
import './index.css'

const ImageTeaser = ({ src, alt, title, desc }) => (
  <Col className="pb-5" md={4}>
    <Card className="image-teaser" md={4}>
      <div
        className="image-container"
        style={{
          backgroundBlendMode: 'multiply',
          backgroundImage: `radial-gradient(circle at 2% 86%, #00d0ff, #001ada 10%, #ce38da), url(${src})`,
        }}
      />
      <CardBody>
        <CardTitle>{title}</CardTitle>
        <CardSubtitle>{desc}</CardSubtitle>
      </CardBody>
    </Card>
  </Col>
)

export default ImageTeaser
