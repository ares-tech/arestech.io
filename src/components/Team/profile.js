import React from 'react'
import { FormattedMessage } from 'react-intl'
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

  onReadMoreClicked = e => {
    this.props.toggleBackdrop(true)
    this.setState({ highlight: true })
    e.preventDefault()
  }

  onReadLessClicked = e => {
    this.props.toggleBackdrop(false)
    this.setState({ highlight: false })
    e.preventDefault()
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
                <FormattedMessage id={name} />
              </p>
              <p style={styles.title}>
                <FormattedMessage id={title} />
              </p>
            </div>
            <p style={styles.intro} className={highlight ? '' : 'block-with-text'}>
              <FormattedMessage id={intro} />
            </p>
            <div style={styles.actionBar}>
              {!highlight ? (
                <a href="/" style={styles.link} onClick={this.onReadMoreClicked}>
                  <FormattedMessage id="general.read.expand" />
                </a>
              ) : (
                <a href="/" style={styles.link} onClick={this.onReadLessClicked}>
                  <FormattedMessage id="general.read.collapse" />
                </a>
              )}
              <a href={linkedIn} target="_blank">
                <img src="/images/icon-linkedIn.svg" alt={`${name} LinkedIn`} width="30" height="100%" />
              </a>
            </div>
          </div>
        </CardBody>
      </Card>
    )
  }
}

export default Profile
