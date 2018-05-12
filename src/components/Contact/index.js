import React from 'react'
import UserLinks from '../UserLinks/UserLinks'
import './index.css'

const Contact = ({ config }) => {
  return (
    <div className="contact-container">
      <UserLinks config={config} labeled />
      <p>twitter feed</p>
    </div>
  )
}

export default Contact
