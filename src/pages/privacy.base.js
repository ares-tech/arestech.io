import React, { Component } from 'react'
import Helmet from 'react-helmet'
import { PrivacyPolicy } from '../components/Legal/PrivacyPolicy'
import config from '../../data/SiteConfig'
import MainLayout from '../util/mainLayout'
import IntlProvider from '../util/intlProvider'
import Navbar from '../components/Navbar'

export default ({ langKey, messages }) => (
  <IntlProvider langKey={langKey} messages={messages}>
    <div>
      <Navbar />
      <MainLayout>
        <Helmet title={`Privacy Policy | ${config.siteTitle}`} />
        <PrivacyPolicy />
      </MainLayout>
    </div>
  </IntlProvider>
)
