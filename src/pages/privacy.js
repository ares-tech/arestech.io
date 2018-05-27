/* @flow */
import React, { Component } from 'react'
import Helmet from 'react-helmet'
import { PrivacyPolicy } from '../components/Legal/PrivacyPolicy'
import config from '../../data/SiteConfig'
import MainLayout from '../util/mainLayout'
import Navbar from '../components/Navbar';

class PrivacyPolicyPage extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <MainLayout>
          <Helmet title={`Privacy Policy | ${config.siteTitle}`} />
          <PrivacyPolicy />
        </MainLayout>
      </div>
    )
  }
}

export default PrivacyPolicyPage
