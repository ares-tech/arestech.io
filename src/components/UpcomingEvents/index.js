import React from 'react'
import moment from 'moment'
import { FormattedMessage } from 'react-intl'
import { Row, Col } from 'reactstrap'
import './index.css'
import events from './events'

const Milestone = ({ event }) => {
  const style = {
    backgroundColor: event.backgroundColor,
    minWidth: '272px',
    height: '127px',
    marginLeft: '10px',
  }

  return (
    <div
      className="card--content event p-2"
      style={{ ...style }}
    >
      <h3 className="event-header" style={{ color: event.headerColor }}>
        <FormattedMessage id={event.title} />
      </h3>
      <ul className="events-container">
        {event.descriptions.map(desc => (
          <li className="event" key={desc}>
            <FormattedMessage id={desc} />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default class UpcomingEvents extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: 0,
    }
  }

  render() {
    return (
      <div id="upcomingEvents" className="upcomingEvents-section">
        <div className="container">
          <Row>
            <Col>
              <h1 className="display-2 headline" style={{ color: '#ff6427' }}>
                <FormattedMessage id="upcomingEvents.title" />
              </h1>
              <p className="lead sub-headline" style={{ color: '#ff6427' }}>
                <FormattedMessage id="upcomingEvents.subtitle" />
              </p>
            </Col>
          </Row>
        </div>
        <div className="container">
          <div className="cards" >
            {events && events.map(event => {
              return (
                <Milestone event={event} />
              )
            })}
          </div>
        </div>
      </div>
    )
  }
}
