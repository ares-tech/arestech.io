import React from 'react'
import { Container, Row, Col, Card, CardBody } from 'reactstrap'
import { FormattedMessage } from 'react-intl'
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
      rel="noopener noreferrer"
      target="_blank"
    >
      <CarouselItem text={<FormattedMessage id="media.item.berlinvalley.intro" />}>
        <div className="p-1" style={{ backgroundColor: '#000' }}>
          <img src="/images/partner/berlinValley-media.png" alt="BerlinValley" width="180" />
        </div>
      </CarouselItem>
    </a>
    <a
      style={{ textDecoration: 'none' }}
      href="https://www.gruenderszene.de/allgemein/blockchain-social-gaming-ares-tech-2018-10642"
      rel="noopener noreferrer"
      target="_blank"
    >
      <CarouselItem text={<FormattedMessage id="media.item.gruenderszene.intro" />}>
        <img src="/images/partner/gruenderszene-partner.png" alt="Gruenderszene" width="210" />
      </CarouselItem>
    </a>
    <a
      style={{ textDecoration: 'none' }}
      href="http://blockchain.hs-mittweida.de/springschool_en.html"
      rel="noopener noreferrer"
      target="_blank"
    >
      <CarouselItem text={<FormattedMessage id="media.item.blockchain.intro" />}>
        <img src="/images/partner/bccm.png" alt="Blockchain Spring School" width="200" />
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
            <FormattedMessage id="media.title" />
          </h1>
          <p className="lead" style={{ color: '#fff' }}>
            <FormattedMessage id="media.subtitle" />
          </p>
        </Col>
      </Row>
      <MediaCarousel />
      <Row />
    </Container>
    <div className="intro-shape-1">
      <img src="/images/intro-shape-1.png" width="100%" height="100%" alt="" />
    </div>
    <div className="intro-shape-2">
      <img src="/images/intro-shape-2.png" width="100%" height="100%" alt="" />
    </div>
    <div className="intro-shape-3">
      <img src="/images/intro-shape-3.png" width="100%" height="100%" alt="" />
    </div>
    <div className="intro-shape-4">
      <img src="/images/intro-shape-4.png" width="100%" height="100%" alt="" />
    </div>
  </div>
)

export default Media
