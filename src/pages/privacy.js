/* @flow */
import React, { Component } from 'react'
import Helmet from 'react-helmet'
import { PrivacyPolicy } from '../components/Legal/PrivacyPolicy'
import config from '../../data/SiteConfig'
import MainLayout from '../util/mainLayout'

class PrivacyPolicyPage extends Component {
  render() {
    return (
      <MainLayout>
        <Helmet title={`Privacy Policy | ${config.siteTitle}`} />
        <PrivacyPolicy />
      </MainLayout>
    )
  }
}

export default PrivacyPolicyPage
