import React from 'react'
import Helmet from 'react-helmet'
import { TermOfUse } from '../components/Legal/TermOfUse'
import config from '../../data/SiteConfig'
import MainLayout from '../util/mainLayout'
import IntlProvider from '../util/intlProvider'
import Navbar from '../components/Navbar'

export default ({ langKey, messages }) => (
  <IntlProvider langKey={langKey} messages={messages}>
    <div>
      <Navbar langKey={langKey} />
      <MainLayout langKey={langKey}>
        <Helmet title={`Term of Use | ${config.siteTitle}`} />
        <TermOfUse />
      </MainLayout>
    </div>
  </IntlProvider>
)
