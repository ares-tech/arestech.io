import React from 'react'
import { Container, Row, Col, Card, CardText } from 'reactstrap'
import { FormattedMessage } from 'react-intl'
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
  <div
    id="introduction"
    className="intro-section"
    style={{ paddingTop: '7rem', color: '#9B9B9B', position: 'relative' }}
  >
    <Container>
      <div>
        <Col md={{ offset: 5 }}>
          <h1 className="display-2 headline" style={{ color: '#fff', fontWeight: 'bold' }}>
            <FormattedMessage id="introduction.title" />
          </h1>
          <p className="lead" style={{ color: '#fff' }}>
            <FormattedMessage id="introduction.subtitle" />
          </p>
          <Row className="pb-5">
            <Col md={6}>
              <Card style={{ borderRadius: 20 }}>
                <CardText className="p-3" style={{ marginBottom: 0 }}>
                  <FormattedMessage id="introduction.text.0" />
                </CardText>
                <CardText className="p-3" style={{ marginBottom: 20 }}>
                  <FormattedMessage
                    id="introduction.text.1"
                    values={{
                      suite: (
                        <span>
                          <Highlight color="#001ada" bold>
                            ares
                          </Highlight>{' '}
                          <Highlight color="#00d0ff">suite</Highlight>
                        </span>
                      ),
                      arena: (
                        <span>
                          <Highlight color="#7400a4" bold>
                            ares
                          </Highlight>{' '}
                          <Highlight color="#ce38da">arena</Highlight>
                        </span>
                      ),
                      connect: (
                        <span>
                          <Highlight color="#ff6427" bold>
                            ares
                          </Highlight>{' '}
                          <Highlight color="#ffb158">connect</Highlight>
                        </span>
                      ),
                    }}
                  />
                </CardText>
              </Card>
            </Col>
          </Row>
        </Col>
      </div>
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

export default IntroSection
