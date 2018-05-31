import React, { Component } from 'react'
import Helmet from 'react-helmet'
import { Imprint } from '../components/Legal/Imprint'
import config from '../../data/SiteConfig'
import MainLayout from '../util/mainLayout'
import Navbar from '../components/Navbar'

class PrivacyPolicyPage extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <MainLayout>
          <Helmet title={`Impressum | ${config.siteTitle}`} />
          <Imprint />
        </MainLayout>
      </div>
    )
  }
}

export default PrivacyPolicyPage
