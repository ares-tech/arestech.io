import React from 'react'
import { Container, Row, Col, Card, CardText, CardTitle, CardBody, CardImg } from 'reactstrap'
import { chunk } from 'lodash'
import './index.css'
const tokenDetails = [
  {
    text: 'Symbol: ARES',
    color: '#00d0ff',
    textColor: '#001ada',
  },
  {
    text: 'Total Supply: 1,000,000,000,000 ARES',
    color: '#ff6427',
    textColor: '#7400a4',
  },
  {
    text: 'Sale Supply: 300,000,000 ARES',
    color: '#ce38da',
    textColor: '#7400a4',
  },
  {
    text: 'Token Format: ERC20',
    color: '#ffb158',
    textColor: '#ff6427',
  },
  {
    text: 'Soft Cap: 100,000,000 ARES',
    color: '#001ada',
    textColor: '#00d0ff',
  },
  {
    text: 'Hard Cap: 300,000,000 ARES',
    color: '#7400a4',
    textColor: '#ce38da',
  },
  {
    text: '1 ARES = 0.1 EUR',
    color: '#ce38da',
    textColor: '#7400a4',
  },
  {
    text: 'Public Sale Date: TBD',
    color: '#00d0ff',
    textColor: '#001ada',
  },
]

const TokenDetail = () => (
  <div className="token-detail-section">
    <div className="background-container">
      <div className="custom-shape custom-shape-1" />
    </div>
    <Container className="pt-5">
      <Row>
        <Col>
          <h1 className="display-2 headline" style={{ color: '#ffb158' }}>
            Token Detail
          </h1>
          <p className="lead sub-headline" style={{ color: '#ffb158' }}>
            This is how we get there.
          </p>
        </Col>
      </Row>
      {chunk(tokenDetails, 3).map((row, i) => (
        <Row key={i}>
          {row.map(({ color, text, textColor }, j) => (
            <Col md={4} key={j} className="pb-3">
              <div className="p-4" style={{ backgroundColor: color, borderRadius: 20 }}>
                <span style={{ color: textColor, fontWeight: 'bold' }}>{text}</span>
              </div>
            </Col>
          ))}
        </Row>
      ))}
    </Container>
  </div>
)

export default TokenDetail
