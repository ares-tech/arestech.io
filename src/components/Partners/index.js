import React from 'react'
import { Container, Row, Col, Card } from 'reactstrap'
import { FormattedMessage } from 'react-intl'
import { chunk } from 'lodash'
import './index.css'
import partners from './partners'

const Partners = () => (
  <div
    id="partners"
    className="partners-section"
  >
    <Container>
      <Row className="partners-heading">
        <Col>
          <h1 className="display-2 headline" style={{ color: '#ff6427', fontWeight: 'bold' }}>
            <FormattedMessage id="partner.title" />
          </h1>
          <p className="lead" style={{ color: '#ff6427' }}>
            <FormattedMessage id="partner.subtitle" />
          </p>
        </Col>
      </Row>
      {chunk(partners, 3).map((row, index) => (
        // eslint-disable-next-line
        <Row key={index}>
          {row.map(partner => (
            <Col md={4} key={partner.name} className="pb-4">
              <Card style={{border: 'none', backgroundColor: 'transparent'}}>
                <a className="partners-link" href={partner.link} alt={partner.name} target="_blank">
                  <div
                    style={{
                      backgroundImage: `url(${partner.imageSrc})`,
                      backgroundPosition: 'center',
                      height: '100%',
                      backgroundSize: '70%',
                      backgroundRepeat: 'no-repeat',
                    }}
                  />
                </a>
              </Card>
            </Col>
          ))}
        </Row>
      ))}
    </Container>
    <div className="custom-shape-5">
      <img src="/images/custom-shape-5.png" width="100%" height="100%" alt="" />
    </div>
    <div className="custom-shape-6">
      <img src="/images/custom-shape-6.png" width="100%" height="100%" alt="" />
    </div>
  </div>
)

export default Partners
