import React from 'react'
import { Card, CardBody } from 'reactstrap'
import './index.css'

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

  onReadMoreClicked = () => {
    this.props.toggleBackdrop(true)
    this.setState({ highlight: true })
  }

  onReadLessClicked = () => {
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
                <a href="/" style={styles.link} onClick={this.onReadMoreClicked}>
                  Read more
                </a>
              ) : (
                <a href="/" style={styles.link} onClick={this.onReadLessClicked}>
                  Read less
                </a>
              )}
              <a href={linkedIn} target="_blank">
                <img src="/images/linkedIn.svg" alt={`${name} LinkedIn`} width="30" height="100%" />
              </a>
            </div>
          </div>
        </CardBody>
      </Card>
    )
  }
}

export default Profile
