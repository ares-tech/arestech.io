import React from 'react'
import { Button, ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap'
import './index.css'
import tokenSales from '../TokenSale/tokenSales.js'
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
  <div className="container p-3 p-md-5 main-content" style={{paddingTop: '5em !important'}}>
    <div className="main-shape-2" />
    <h1 className="display-2 headline" style={{ paddingBottom: '10px', color: '#fff' }}>
      Scalable Blockchain <br /> Social Gaming Network
    </h1>
    <p className="lead sub-headline">All-in-One Solution for Social Game Creators</p>

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
        <a href="https://t.me/ares_tech" rel="noopener noreferrer" target="_blank" style={{ color: '#ce38da' }}>
          <Button className="main__button" block>
            <i className="fab fa-telegram-plane" />
            <span style={{ paddingLeft: 10 }}>Chat with us</span>
          </Button>
        </a>
      </div>
    </div>
    {/*
    <div className="token-sale-box" style={{overflow: 'hidden', marginTop: '40px'}}>
      <div className="token-sale-header" style={{display: 'flex', paddingLeft: '25px', alignItems: 'center', verticalAlign: 'middle'}}>
        <div className="circle" style={{marginRight: '25px'}} />
        <div style={{verticalAlign: 'center', height: '36px', padingTop: '5px'}}>Token Sale</div>
      </div>
      <div className="token-sale-box-body" style={{display: 'flex', alignItems: 'center', flexDirection: 'column', width: '100%', height: '100%', overflow: 'hidden'}}>
        <div className="graph" style={{marginTop: '45px'}}>
          <div className="graph-left" style={{width: `${tokenSales[4].text.split('%')[0]}%`}}>
          </div>
          <div className="">
          </div>
        </div>
        <div className="token-text">
          <div className="text-left" style={{color: '#001ada', fontSize: '20px', fontWeight: 'bold', marginTop: '5px'}}>
            Soft cap
          </div>
          <div className="text-right" style={{color: '#001ada', fontSize: '20px', fontWeight: 'bold', marginTop: '5px'}}>
            Hard cap
          </div>
        </div>
        <div className="token-number" style={{ marginTop: '20px', width: '232px', height: '38px', fontSize: '40px', fontWeight: 'bold', color: '#001ada'}}>
          €15,000,000
        </div>
      </div>
    </div>
    */}

  </div>
)

export default Main
