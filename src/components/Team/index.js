import React from 'react'
import { chunk } from 'lodash'
import { Container, Row, Col } from 'reactstrap'
import Profile from './profile';
import './index.css'
import teams from './TeamData'

class Team extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      backdrop: false,
    }
  }

  toggleBackdrop = (backdrop) => {
    this.setState({ backdrop })
  }

  render() {
    return (
      <div id="team" className="team-section">
        <Container className="pt-5 team-container">
          <Row>
            <Col>
              <h1 className="display-2 headline" style={{ color: '#fff' }}>
                Team and Advisors
              </h1>
              <p className="lead sub-headline" style={{ color: '#fff' }}>
                Meet the players in Berlin.
              </p>
            </Col>
          </Row>
          {chunk(teams, 3).map((row, index) => (
            <Row key={index} className="team-profile-row">
              {row.map(({ name, title, imageSrc, intro, linkedIn }) => (
                <Col key={name} md={4} className="pb-5">
                  <Profile
                    name={name}
                    title={title}
                    src={imageSrc}
                    intro={intro}
                    linkedIn={linkedIn}
                    toggleBackdrop={this.toggleBackdrop}
                  />
                </Col>
              ))}
            </Row>
          ))}
        </Container>
        <div className={`backdrop + ${this.state.backdrop ? ' show' : ''}`} />
      </div>
    )
  }
}

export default Team
