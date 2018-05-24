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
          <a href="/documents/ares_tech_intro_en_1.5.pdf" rel="noopener noreferrer" target="_blank">
            <DropdownItem>Business Intro v1.5</DropdownItem>
          </a>
          <DropdownItem divider />
          <a href="/documents/ares_tech_whitepaper_en_1.5.pdf" rel="noopener noreferrer" target="_blank">
            <DropdownItem>English Whitepaper v1.5</DropdownItem>
          </a>
          <DropdownItem divider />
          <a href="/documents/ares_tech_whitepaper_ch_1.5.pdf" rel="noopener noreferrer" target="_blank">
            <DropdownItem>Chinese Whitepaper v1.5</DropdownItem>
          </a>
        </DropdownMenu>
      </ButtonDropdown>
    )
  }
}
const Main = () => (
  <div className="container p-3 p-md-5 main-content">
    <div className="main-shape-2" />
    <h1 className="display-2 headline" style={{ color: '#fff' }}>
      Blockchain. <br/> Gaming. <br/>Network.
    </h1>
    <p className="lead sub-headline">Scalable Blockchain All-in-One Solution for Social Game Creators</p>

    <div className="lead">
      <div className="row" style={{ marginLeft: '0px', marginRight: '0px' }}>
        <Downloads />
        <a href="/reg.php" style={{ color: '#ce38da' }}>
          <Button className="main__button" block>
            <i className="fab fa-bitcoin" />
            <span style={{ paddingLeft: 10 }}>Reg for candy airdrop!</span>
          </Button>
        </a>
      </div>
      <div className="main__button__container">
        <a href="https://t.me/ares_tech" target="_blank" style={{ color: '#ce38da' }}>
          <Button className="main__button" block>
            <i className="fab fa-telegram-plane" />
            <span style={{ paddingLeft: 10 }}>Join our Telegram group</span>
          </Button>
        </a>
      </div>
    </div>
  </div>
)

export default Main
