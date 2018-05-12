import React, { Component } from 'react'
import './Footer.css'

class Footer extends Component {
  render() {
    const { config } = this.props
    const { copyright, address } = config

    return (
      <footer className="footer">
        <div className="notice-container">
          <div className="address-container">
            <p>{copyright}</p>
            <p>{address}</p>
          </div>
          <p>TODO: Subscribe placeholder</p>
        </div>
      </footer>
    )
  }
}

export default Footer
