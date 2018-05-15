import React from 'react'
import { chunk } from 'lodash'
import { Container, Row, Col, Card, CardText, CardTitle, CardBody, CardImg } from 'reactstrap'
import './index.css'
import teams from './team.json'

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
  <div style={{ display: 'flex', flexDirection: 'column' }}>
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

const Profile = ({ name, title, src, intro, onReadMoreClick, linkedIn }) => (
  <Card>
    <CardBody>
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-around', alignItems: 'center' }}>
        <div
          className="profile-image"
          style={{ backgroundImage: `url(${src})`, width: '160px', height: '160px', borderRadius: '50%' }}
        />
        <div>
          <p
            className="mb-0 pt-2"
            style={{ alignSelf: 'start', fontWeight: 'bold', fontSize: '2rem', color: '#ff6427' }}
          >
            {name}
          </p>
          <p style={{ color: '#ff6427' }}>{title}</p>
        </div>
        <p style={{ color: '#9b9b9b' }}>{intro}</p>
        <div
          style={{ alignSelf: 'stretch', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}
        >
          <a href="/" style={{ color: '#ff6427' }}>
            Read more
          </a>
          <a href={linkedIn}>LinkedIn</a>
        </div>
      </div>
    </CardBody>
  </Card>
)

const IntroSection = () => (
  <div className="team-section">
    <Container className="pt-5 team-container">
      <Row>
        <Col>
          <h1 className="display-2 headline" style={{ color: '#fff' }}>
            Team
          </h1>
          <p className="lead sub-headline" style={{ color: '#fff' }}>
            Meet the players in Berlin.
          </p>
        </Col>
      </Row>
      {chunk(teams, 3).map(row => (
        <Row>
          {row.map(({ name, title, imageSrc, intro, linkedIn }) => (
            <Col md={4}>
              <Profile name={name} title={title} src={imageSrc} intro={intro} linkedIn={linkedIn} />
            </Col>
          ))}
        </Row>
      ))}
    </Container>
  </div>
)

export default IntroSection
