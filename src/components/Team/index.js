import React from 'react'
import { chunk } from 'lodash'
import { Container, Row, Col, Card, CardBody } from 'reactstrap'
import './index.css'
import teams from './team.json'

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  name: { alignSelf: 'start', fontWeight: 'bold', fontSize: '1.8rem', color: '#ff6427' },
  title: { color: '#ff6427' },
  intro: { color: '#9b9b9b' },
  actionBar: { alignSelf: 'stretch', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' },
  link: { color: '#ff6427', textDecoration: 'underline', fontSize: 'larger' },
}

class Profile extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      highlight: false,
    }
  }
  onReadMoreClicked() {
    this.props.toggleBackdrop(true)
    this.setState({ highlight: true })
  }
  onReadLessClicked() {
    this.props.toggleBackdrop(false)
    this.setState({ highlight: false })
  }
  render() {
    const { name, title, src, intro, linkedIn } = this.props
    const { highlight } = this.state

    return (
      <Card className="team-profile-card" style={{ ...(highlight ? { zIndex: 1000 } : {}) }}>
        <CardBody>
          <div style={styles.container}>
            <div
              className="profile-image"
              style={{
                backgroundImage: `url(${src})`,
                width: '160px',
                height: '160px',
                borderRadius: '50%',
                backgroundSize: 'cover',
              }}
            />
            <div>
              <p className="mb-0 pt-2" style={styles.name}>
                {name}
              </p>
              <p style={styles.title}>{title}</p>
            </div>
            <p style={styles.intro} className={highlight ? '' : 'block-with-text'}>
              {intro}
            </p>
            <div style={styles.actionBar}>
              {!highlight ? (
                <a href="/" style={styles.link} onClick={this.onReadMoreClicked.bind(this)}>
                  Read more
                </a>
              ) : (
                <a href="/" style={styles.link} onClick={this.onReadLessClicked.bind(this)}>
                  Read less
                </a>
              )}
              <a href={linkedIn}>
                <img src="/images/linkedIn.svg" alt={name + ' LinkedIn'} width="30" height="100%" />
              </a>
            </div>
          </div>
        </CardBody>
      </Card>
    )
  }
}

class Team extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      backdrop: false,
    }
  }
  toggleBackdrop(backdrop) {
    this.setState({ backdrop })
  }
  render() {
    return (
      <div id="team" className="team-section">
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
          {chunk(teams, 3).map((row, i) => (
            <Row key={i} className="team-profile-row">
              {row.map(({ name, title, imageSrc, intro, linkedIn }, j) => (
                <Col key={j} md={4} className="pb-5">
                  <Profile
                    name={name}
                    title={title}
                    src={imageSrc}
                    intro={intro}
                    linkedIn={linkedIn}
                    toggleBackdrop={this.toggleBackdrop.bind(this)}
                  />
                </Col>
              ))}
            </Row>
          ))}
        </Container>
        <div className={'backdrop' + (this.state.backdrop ? ' show' : '')} />
      </div>
    )
  }
}

export default Team
