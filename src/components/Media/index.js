import React from 'react'
import { Container, Row, Col, Card, CardBody } from 'reactstrap'
import './index.css'
import Carousel from 'nuka-carousel'

const CarouselItem = ({ text, children }) => (
  <Card style={{ height: 280 }}>
    <CardBody className="carousel-item">
      <h3>{text}</h3>
      {children}
    </CardBody>
  </Card>
)

const MediaCarousel = () => (
  <Carousel wrapAround style={{ height: 280 }}>
    <CarouselItem text="Dive into the ARES technology stack which provides an all-in-one solution for blockchain developers and users.">
      <div className="p-1" style={{ backgroundColor: '#000' }}>
        <img src="/images/berlinvalley.png" alt="berlinvalley" width="180" />
      </div>
    </CarouselItem>
    <CarouselItem text="Blockchain – ein Gamechanger im wahrsten Sinne des Wortes. Denn die Technologie hält nun Einzug in die Gaming-Welt und bietet Entwicklern neue Perspektiven.">
      <img src="/images/gruenderszene.svg" alt="gruenderszene" width="250" />
    </CarouselItem>
    <CarouselItem text="ARES Tech giving a talk at the Blockchain Spring School 2018 in Mittweida.">
      <div className="p-3" style={{ backgroundColor: '#000' }}>
        <p style={{ color: '#fff', fontSize: '1.4rem', marginBottom: 0 }}>blockchain sprint school</p>
      </div>
    </CarouselItem>
  </Carousel>
)

const Media = () => (
  <div className="media-section" style={{ paddingTop: '10rem', color: '#9B9B9B', position: 'relative' }}>
    <Container>
      <Row>
        <Col>
          <h1 className="display-2 headline" style={{ color: '#fff', fontWeight: 'bold' }}>
            Media
          </h1>
          <p className="lead" style={{ color: '#fff' }}>
            See what others are saying about us.
          </p>
        </Col>
      </Row>
      <MediaCarousel />
      <Row />
    </Container>
    <div className="intro-shape-1">
      <img src="/images/intro-shape-1.png" width="100%" height="100%" />
    </div>
    <div className="intro-shape-2">
      <img src="/images/intro-shape-2.png" width="100%" height="100%" />
    </div>
    <div className="intro-shape-3">
      <img src="/images/intro-shape-3.png" width="100%" height="100%" />
    </div>
    <div className="intro-shape-4">
      <img src="/images/intro-shape-4.png" width="100%" height="100%" />
    </div>
  </div>
)

export default Media
