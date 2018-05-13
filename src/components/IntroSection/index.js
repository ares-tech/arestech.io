import React from 'react'
import { Row, Col, Card, CardText } from 'reactstrap'
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

const IntroSection = () => (
  <div className="intro-section" style={{ paddingTop: '5rem', color: '#9B9B9B' }}>
    <Row>
      <Col md={{ offset: 5 }}>
        <h1 className="display-2" style={{ color: '#fff', fontWeight: 'bold' }}>
          Introduction
        </h1>
        <p className="lead" style={{ color: '#fff' }}>
          Ares is Scalable Blockchain Social Gaming Network
        </p>
        <Row>
          <Col md={6}>
            <Card>
              <CardText className="p-2" style={{ marginBottom: 0 }}>
                Ares Tech is committed to growing into a scalable Blockchain social gaming network.
              </CardText>
              <CardText className="p-2">
                The{' '}
                <Highlight color="#001ada" bold>
                  ares
                </Highlight>{' '}
                <Highlight color="#00d0ff">suite</Highlight> provides creators with an all-in-one development solution
                for efficient and friendly cross-chain collaboration. The featured{' '}
                <Highlight color="#7400a4" bold>
                  ares
                </Highlight>{' '}
                <Highlight color="#ce38da">arena</Highlight> is a casual gaming platform, which can easily engage gamers
                in social competition on blockchain.{' '}
                <Highlight color="#ff6427" bold>
                  ares
                </Highlight>{' '}
                <Highlight color="#ffb158">connect</Highlight> will bring various monetization opportunities with
                partners, which can turn indie games into profitable intellectual property.
              </CardText>
            </Card>
          </Col>
        </Row>
      </Col>
    </Row>
  </div>
)

export default IntroSection
