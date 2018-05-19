/* @flow */
import React, { Component } from 'react'
import Helmet from 'react-helmet'
import { Imprint } from '../components/Legal/Imprint'
import config from '../../data/SiteConfig'
import MainLayout from '../util/mainLayout'

class PrivacyPolicyPage extends Component {
  render() {
    return (
      <MainLayout>
        <Helmet title={`Impressum | ${config.siteTitle}`} />
        <Imprint />
      </MainLayout>
    )
  }
}

export default PrivacyPolicyPage
