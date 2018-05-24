import React from 'react'
import { Container, Row, Col, Card, CardBody } from 'reactstrap'
import Carousel from 'nuka-carousel'
import './index.css'

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
    <a
      style={{ textDecoration: 'none' }}
      href="https://berlinvalley.com/a-new-blockchain-startup-in-berlin-to-decentralize-the-ecosystem-of-game-business/"
      target="_blank"
    >
      <CarouselItem text="Dive into the ARES technology stack which provides an all-in-one solution for blockchain developers and users.">
        <div className="p-1" style={{ backgroundColor: '#000' }}>
          <img src="/images/berlinvalley.png" alt="BerlinValley" width="180" />
        </div>
      </CarouselItem>
    </a>
    <a
      style={{ textDecoration: 'none' }}
      href="https://www.gruenderszene.de/allgemein/blockchain-social-gaming-ares-tech-2018-10642"
      target="_blank"
    >
      <CarouselItem text="Blockchain – ein Gamechanger im wahrsten Sinne des Wortes. Denn die Technologie hält nun Einzug in die Gaming-Welt und bietet Entwicklern neue Perspektiven.">
        <img src="/images/partner-gruenderszene.png" alt="Gruenderszene" width="250" />
      </CarouselItem>
    </a>
    <a
      style={{ textDecoration: 'none' }}
      href="http://blockchain.hs-mittweida.de/springschool_en.html"
      target="_blank"
    >
      <CarouselItem text="ARES Tech giving a talk at the Blockchain Spring School 2018 in Mittweida.">
        <img src="/images/partner-bccm.jpg" alt="Blockchain Spring School" width="200" />
      </CarouselItem>
    </a>
  </Carousel>
)

const Media = () => (
  <div id="media" className="media-section" style={{ paddingTop: '10rem', color: '#9B9B9B', position: 'relative' }}>
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
