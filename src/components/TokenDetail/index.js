import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import { FormattedMessage } from 'react-intl'
import { chunk } from 'lodash'
import './index.css'
import tokenDetails from './tokenDetails'

const TokenDetail = () => (
  <div id="token" className="token-detail-section">
    <div className="background-container">
      <div className="custom-shape custom-shape-1" />
    </div>
    <Container className="pt-5">
      <Row>
        <Col>
          <h1 className="display-2 headline pb-4" style={{ color: '#ffb158' }}>
            <FormattedMessage id="token.detail.title" />
          </h1>
        </Col>
      </Row>
      {chunk(tokenDetails, 3).map((row, index) => (
        // eslint-disable-next-line
        <Row key={index}>
          {row.map(({ color, text, textColor }) => (
            <Col md={4} key={text} className="pb-3">
              <div className="p-4" style={{ backgroundColor: color, borderRadius: 20 }}>
                <span style={{ color: textColor, fontWeight: 'bold' }}>
                  <FormattedMessage id={text} />
                </span>
              </div>
            </Col>
          ))}
        </Row>
      ))}
    </Container>
  </div>
)

export default TokenDetail
