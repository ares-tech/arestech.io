import React from 'react'
import Headline from '../presentational/Headline'
import SubHeadline from '../presentational/SubHeadline'
import { colors } from '../../style'
import { Jumbotron, Button, ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap'
import './index.css'

class Downloads extends React.Component {
  constructor(props) {
    super(props)

    this.toggle = this.toggle.bind(this)
    this.state = {
      dropdownOpen: false,
    }
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen,
    })
  }

  render() {
    return (
      <ButtonDropdown className="main__button__container " isOpen={this.state.dropdownOpen} toggle={this.toggle}>
        <DropdownToggle className="main__button" caret block>
          <i className="far fa-file" />
          <span style={{ paddingLeft: 10 }}>Read our White Paper </span>
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem>
            <a href="http://arestech.io/doc/ares_tech_intro_en_1.5.pdf">Business Intro v1.5</a>
          </DropdownItem>
          <DropdownItem divider />
          <DropdownItem>
            <a href="http://arestech.io/doc/ares_tech_whitepaper_en_1.5.pdf">English Whitepaper v1.5</a>
          </DropdownItem>
          <DropdownItem divider />
          <DropdownItem>
            <a href="http://arestech.io/doc/ares_tech_whitepaper_ch_1.5.pdf">Chinese Whitepaper v1.5</a>
          </DropdownItem>
        </DropdownMenu>
      </ButtonDropdown>
    )
  }
}
const Main = () => (
  <div className="container p-3 p-md-5 main-content">
    <div className="main-shape-2" />
    <h1 className="display-2 headline" style={{ color: '#fff' }}>
      Scalable Blockchain
    </h1>
    <h1 className="display-2 headline" style={{ color: '#fff' }}>
      Social Gaming Network
    </h1>
    <p className="lead sub-headline">All-in-One Solution for Social Game Creators</p>
    <div className="lead">
      <div className="main__button__container">
        <Downloads />
      </div>
      <div className="main__button__container">
        <Button className="main__button" block>
          <i className="fab fa-telegram-plane" />
          <a href="https://t.me/ares_tech" style={{ color: '#ce38da' }}>
            <span style={{ paddingLeft: 10 }}>Chat with us</span>
          </a>
        </Button>
      </div>
    </div>
  </div>
)

export default Main
