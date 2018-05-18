import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import './index.css'

const tokenSales = [
  {
    text: '10% Community Support',
    color: '#ff6427',
    textColor: '#7400a4',
  },
  {
    text: '5% Advisors & Partners',
    color: '#001ada',
    textColor: '#00d0ff',
  },
  {
    text: '5% Reward & Airdrop',
    color: '#ce38da',
    textColor: '#7400a4',
  },
  {
    text: '5% Strategic Cooperation',
    color: '#00d0ff',
    textColor: '#001ada',
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

const TokenSales = () => (
  <div id="token-sale" className="token-sale-section">
    <div className="background-container">
      <div className="custom-shape custom-shape-1" />
    </div>
    <Container className="pt-5">
      <Row>
        <Col>
          <h1 className="display-2 headline pb-4" style={{ color: '#ce38da' }}>
            Token Sales
          </h1>
        </Col>
      </Row>

      <div className="token-sale-distribute-chart">
        {tokenSales.map(({ color, text, textColor }, j) => (
          <div style={{ paddingTop: '4rem' }}>
            <div className={'p-2 token-sale-item token-sale-item-' + j} style={{ backgroundColor: color }}>
              <span style={{ color: textColor, fontWeight: 'bold' }}>{text}</span>
            </div>
          </div>
        ))}
      </div>
    </Container>
  </div>
)

export default TokenSales
