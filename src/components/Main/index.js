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
    </div>
  </div>
)

export default Main
