import React from 'react'
import { FormattedMessage } from 'react-intl'
import { Button, ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap'
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
          <span style={{ paddingLeft: 10 }}>
            <FormattedMessage id="main.read.whitepaper" />
          </span>
        </DropdownToggle>
        <DropdownMenu>
          <a href="/documents/ares_tech_intro_en_1.5.pdf" rel="noopener noreferrer" target="_blank">
            <DropdownItem>
              <FormattedMessage id="main.resource.business.intro" />
            </DropdownItem>
          </a>
          <DropdownItem divider />
          <a href="/documents/ares_tech_whitepaper_en_1.5.pdf" rel="noopener noreferrer" target="_blank">
            <DropdownItem>
              <FormattedMessage id="main.resource.english.whitepaper" />
            </DropdownItem>
          </a>
          <DropdownItem divider />
          <a href="/documents/ares_tech_whitepaper_ch_1.5.pdf" rel="noopener noreferrer" target="_blank">
            <DropdownItem>
              <FormattedMessage id="main.resource.chinese.whitepaper" />
            </DropdownItem>
          </a>
        </DropdownMenu>
      </ButtonDropdown>
    )
  }
}

const Main = () => (
  <div className="container p-3 p-md-5 main-content">
    <div className="main-shape-2" />
    <h1 className="display-1 headline" style={{ color: '#fff' }}>
      <FormattedMessage id="main.title.0" />
      <br />
      <FormattedMessage id="main.title.1" />
      <br />
      <FormattedMessage id="main.title.2" />
    </h1>
    <p className="lead sub-headline">
      <FormattedMessage id="main.subtitle" />
    </p>

    <div className="lead">
      <div className="row" style={{ marginLeft: '0px', marginRight: '0px' }}>
        <Downloads />
        <a href="/reg.php" style={{ color: '#ce38da' }}>
          <Button className="main__button" block>
            <i className="fab fa-bitcoin" />
            <span style={{ paddingLeft: 10 }}>
              <FormattedMessage id="main.register.candy" />
            </span>
          </Button>
        </a>
      </div>
      <div className="main__button__container">
        <a href="https://t.me/ares_tech" rel="noopener noreferrer" target="_blank" style={{ color: '#ce38da' }}>
          <Button className="main__button" block>
            <i className="fab fa-telegram-plane" />
            <span style={{ paddingLeft: 10 }}>
              <FormattedMessage id="main.join.telegram" />
            </span>
          </Button>
        </a>
      </div>
      <div className="token-sale-box" style={{position: 'relative', overflow: 'hidden', marginTop: '40px'}}>
        <div className="token-sale-header" style={{display: 'flex', paddingLeft: '199px', alignItems: 'center', verticalAlign: 'middle'}}>
          <div style={{verticalAlign: 'center', height: '36px', padingTop: '5px'}}>Token Distribution</div>
        </div>
        <img className="ares-coin" src="/images/arestech-coin.png" alt="arestech-coin" style={{position: 'absolute', width:"198", height:"198", left: '5px', top: '20px'}}/>
        <div className="token-sale-box-body" style={{display: 'flex', paddingLeft: '199px', flexDirection: 'column', width: '100%', height: '100%', overflow: 'hidden'}}>
          <div className="token-sale-header2" style={{ marginTop: '15px', height: '38px', fontSize: '40px', fontWeight: 'bold', color: '#001ada'}}>
            Begins 09.2018
          </div>
          <div style={{marginTop: '25px', maxWidth: '295px', fontSize: '20px', lineHeight: '1.1', color: '#bebebe'}}>
            We’re currently in the private sale stage of funding. Sign up
            to our newsletter or join our telegram group for all the
            latest updates
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default Main
