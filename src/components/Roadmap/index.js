import React from 'react'
import moment from 'moment'
import { FormattedMessage } from 'react-intl'
import { Row, Col } from 'reactstrap'
import HorizontalTimeline from 'react-horizontal-timeline'
import './index.css'
import milestones from './milestones'

const Milestone = ({ event, isOdd }) => {
  const style = {
    backgroundColor: event.backgroundColor,
    width: 240,
    height: 160,
    marginLeft: -50,
  }

  return (
    <div
      className="milestone p-2"
      style={{ ...style, ...(isOdd ? { position: 'absolute', marginBottom: -500, top: 30 } : {}) }}
    >
      <h3 className="milestone-header" style={{ color: event.headerColor }}>
        Q{`${moment(event.date).quarter()} ${moment(event.date).year()}`}
      </h3>
      <ul className="milestones-container">
        {event.descriptions.map(desc => (
          <li className="milestone" key={desc}>
            <FormattedMessage id={desc} />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default class Roadmap extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: 0,
    }
  }

  render() {
    return (
      <div id="roadmap" className="roadmap-section">
        <div className="container">
          <Row>
            <Col>
              <h1 className="display-2 headline" style={{ color: '#7400a4' }}>
                <FormattedMessage id="roadmap.title" />
              </h1>
              <p className="lead sub-headline" style={{ color: '#7400a4' }}>
                <FormattedMessage id="roadmap.subtitle" />
              </p>
            </Col>
          </Row>
        </div>

        <div style={{ width: '100%', height: '300px', margin: '0 auto', marginTop: '10rem' }}>
          <HorizontalTimeline
            index={this.state.value}
            indexClick={index => {
              this.setState({ value: index })
            }}
            getLabel={(date, index) => <Milestone event={milestones[index]} isOdd={index % 2 !== 0} />}
            values={milestones.map(({ date }) => date)}
          />
        </div>
      </div>
    )
  }
}
