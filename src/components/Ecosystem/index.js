import React from 'react'
import { Container, Row, Col, Card, CardBody } from 'reactstrap'
import { FormattedHTMLMessage, FormattedMessage } from 'react-intl'
import './index.css'

const Bubble = ({ name, src }) => (
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '200px',
        height: '200px',
        borderRadius: '50%',
        backgroundColor: '#fff',
      }}
    >
      <div>
        <img alt={name} src={src} width="100%" />
      </div>
    </div>
  </div>
)

const Title = ({ text1, color1, text2, color2 }) => (
  <h2 style={{ textAlign: 'center' }}>
    <span style={{ color: color1 }}>{text1}</span>
    <span style={{ color: color2 }}>{text2}</span>
  </h2>
)

const Description = ({ children }) => (
  <p style={{ color: '#fff', textAlign: 'center', fontSize: 'larger' }}>{children}</p>
)

const IntroSection = () => (
  <div id="products" className="ecosystem-section">
    <Container className="pt-5">
      <Row>
        <Col>
          <h1 className="display-2 headline" style={{ color: '#7400a4' }}>
            <FormattedMessage id="product.title" />
          </h1>
          <p className="lead sub-headline" style={{ color: '#7400a4' }}>
            <FormattedMessage id="product.subtitle" />
          </p>
        </Col>
      </Row>
      <Row>
        <Col className="py-5 eco-container" md={4}>
          <Card className="px-5 eco-card suite">
            <CardBody style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-around' }}>
              <Bubble name="suite" src="/images/icon-suite.png" />
              <Title text1="ares" color1="#001ada" text2="suite" color2="#00d0ff" />
              <Description>
                <FormattedHTMLMessage id="product.suite.description" />
              </Description>
            </CardBody>
          </Card>
        </Col>
        <Col className="py-5 eco-container" md={4}>
          <Card className="px-5 eco-card arena">
            <CardBody style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-around' }}>
              <Bubble name="arena" src="/images/icon-arena.png" />
              <Title text1="ares" color1="#7400a4" text2="arena" color2="#ce38da" />
              <Description>
                <FormattedHTMLMessage id="product.arena.description" />
              </Description>
            </CardBody>
          </Card>
        </Col>
        <Col className="py-5 eco-container" md={4}>
          <Card className="px-5 eco-card connect">
            <CardBody style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-around' }}>
              <Bubble name="connect" src="/images/icon-connect.png" />
              <Title text1="ares" color1="#ff6427" text2="connect" color2="#ffb158" />
              <Description>
                <FormattedHTMLMessage id="product.connect.description" />
              </Description>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  </div>
)

export default IntroSection
