import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import './index.css'

const tokenUsage = [
  {
    text: '10% Community Support',
    color: '#ff6427',
    textColor: '#7400a4',
  },
  {
    text: '30% Token Sale',
    color: '#001ada',
    textColor: '#00d0ff',
  },
  {
    text: '20% Team',
    color: '#ce38da',
    textColor: '#7400a4',
  },
  {
    text: '15% Initial Prize Pool',
    color: '#7400a4',
    textColor: '#ce38da',
  },
  {
    text: '10% Future Employees',
    color: '#ffb158',
    textColor: '#ff6427',
  },
]

const TokenUsage = () => (
  <div id="use-of-funds" className="token-usage-section">
    <div className="background-container">
      <div className="custom-shape custom-shape-1" />
    </div>
    <Container className="pt-5 chart-container">
      <Row>
        <Col>
          <h1 className="display-2 headline pb-5" style={{ color: '#00d0ff' }}>
            Usage of Funds
          </h1>
        </Col>
      </Row>
      <div className="token-usage-distribute-chart">
        <div className="token-usage-distribute-chart mobile-only" style={{ display: 'none' }} />
        {tokenUsage.map(({ color, text, textColor }, index) => (
          <div key={text} className="token-usage-item-container" style={{ paddingTop: '4rem' }}>
            <div className={`p-2 token-usage-item token-usage-item-${index}`} style={{ backgroundColor: color }}>
              <span style={{ color: textColor, fontWeight: 'bold' }}>{text}</span>
            </div>
          </div>
        ))}
      </div>
    </Container>
  </div>
)

export default TokenUsage
