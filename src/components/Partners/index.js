import React from 'react'
import { Container, Row, Col, Card } from 'reactstrap'
import { chunk } from 'lodash'
import './index.css'
import partners from './partners'

const Partners = () => (
  <div
    id="partners"
    className="partners-section"
    style={{ paddingTop: '5rem', paddingBottom: '2rem', color: '#9B9B9B', position: 'relative' }}
  >
    <Container>
      <Row>
        <Col>
          <h1 className="display-2 headline" style={{ color: '#fff', fontWeight: 'bold' }}>
            Partners
          </h1>
          <p className="lead" style={{ color: '#fff' }}>
            Our investor,media and technical partners.
          </p>
        </Col>
      </Row>
      {chunk(partners, 3).map((row, index) => (
        <Row key={index}>
          {row.map(partner => (
            <Col md={4} key={partner.name} className="pb-4">
              <Card style={{ borderRadius: 20 }}>
                <a className="p-2" href={partner.link} alt={partner.name} style={{ height: 160 }} target="_blank">
                  <div
                    style={{
                      backgroundImage: `url(${partner.imageSrc})`,
                      backgroundPosition: 'center',
                      height: '100%',
                      backgroundSize: 'contain',
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
    <div className="custom-shape-7">
      <img src="/images/custom-shape-7.png" width="100%" height="100%" alt="" />
    </div>
    <div className="custom-shape-8">
      <img src="/images/custom-shape-8.png" width="100%" height="100%" alt="" />
    </div>
  </div>
)

export default Partners
