import React from 'react'
import Headline from '../presentational/Headline'
import SubHeadline from '../presentational/SubHeadline'
import { colors } from '../../style'
import { Jumbotron, Button } from 'reactstrap'
import './index.css'

const Main = () => (
  <div className="container p-3 p-md-5 main-content">
    <h1 className="display-3">Scalable Blockchain</h1>
    <h1 className="display-3">Social Gaming Network</h1>
    <p className="lead">All-in-One Solution for Social Game Creators</p>
    <p className="lead">
      <div className="main__button__container">
        <Button className="main__button" bsSize="large" block>
          <i className="far fa-file" />
          <span style={{ paddingLeft: 10 }}>Read our White Paper</span>
        </Button>
      </div>
      <div className="main__button__container">
        <Button className="main__button" bsSize="large" block>
          <i className="fab fa-telegram-plane" />
          <span style={{ paddingLeft: 10 }}>Chat with us</span>
        </Button>
      </div>
    </p>
  </div>
)

export default Main
