import React from 'react'
import { Col, Card, CardBody, CardTitle, CardSubtitle } from 'reactstrap'
import './index.css'

export default ({ link, src, title, desc }) => (
  <Col className="pb-5" md={4}>
    <Card className="image-teaser" md={4} style={{ cursor: 'pointer' }} onClick={() => window.open(link, '_blank')}>
      <div
        className="image-container container"
        style={{
          backgroundBlendMode: 'multiply',
          backgroundSize: 'contain',
          backgroundImage: `radial-gradient(circle at 2% 86%, rgb(183, 191, 193), rgb(236, 231, 229) 54%, rgb(167, 162, 157)), url(${src})`,
        }}
        role="presentation"
        onKeyDown={() => {}}
      />
      <CardBody>
        <CardTitle>{title}</CardTitle>
        <CardSubtitle>{desc}</CardSubtitle>
      </CardBody>
    </Card>
  </Col>
)
