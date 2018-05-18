import React from 'react'
import { Container, Row, Col, Card, CardText, CardTitle, CardBody, CardImg } from 'reactstrap'
import './index.css'

const Highlight = ({ color, bold = false, children }) => {
  const baseStyle = {
    color,
  }
  return (
    <span
      style={{
        ...baseStyle,
        ...(bold ? { fontWeight: 'bold' } : {}),
      }}
    >
      {children}
    </span>
  )
}

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
  <div id="ecosystem" className="ecosystem-section">
    <Container className="pt-5">
      <Row>
        <Col>
          <h1 className="display-2 headline" style={{ color: '#7400a4' }}>
            Ecosystem
          </h1>
          <p className="lead sub-headline" style={{ color: '#7400a4' }}>
            Ares is Scalable Blockchain Social Gaming Network
          </p>
        </Col>
      </Row>
      <Row>
        <Col className="py-5" md={4}>
          <Card className="px-5 eco-card suite">
            <CardBody style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-around' }}>
              <Bubble name="suite" src="/images/suite-icon.png" />
              <Title text1="ares" color1="#001ada" text2="suite" color2="#00d0ff" />
              <Description>
                Provide creators with <span style={{ fontWeight: 'bold' }}>all-in-one</span> development solution for
                efficient and friendly cross-chain collaboration.
              </Description>
            </CardBody>
          </Card>
        </Col>
        <Col className="py-5" md={4}>
          <Card className="px-5 eco-card arena">
            <CardBody style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-around' }}>
              <Bubble name="arena" src="/images/arena-icon.png" />
              <Title text1="ares" color1="#7400a4" text2="arena" color2="#ce38da" />
              <Description>
                The first <span style={{ fontWeight: 'bold' }}>zero commission</span> gaming platform and decentralized
                application.
              </Description>
            </CardBody>
          </Card>
        </Col>
        <Col className="py-5" md={4}>
          <Card className="px-5 eco-card connect">
            <CardBody style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-around' }}>
              <Bubble name="connect" src="/images/connect-icon.png" />
              <Title text1="ares" color1="#ff6427" text2="connect" color2="#ffb158" />
              <Description>
                Ecosystem that connects global business resources, help the developers to upgrade indie games to{' '}
                <span style={{ fontWeight: 'bold' }}>profitable IP</span>
              </Description>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  </div>
)

export default IntroSection
