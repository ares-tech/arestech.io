import React from 'react'
import Helmet from 'react-helmet'
import { Imprint } from '../components/Legal/Imprint'
import config from '../../data/SiteConfig'
import MainLayout from '../util/mainLayout'
import IntlProvider from '../util/intlProvider'
import Navbar from '../components/Navbar'

export default ({ langKey, messages }) => (
  <IntlProvider langKey={langKey} messages={messages}>
    <div>
      <Navbar langKey={langKey} />
      <MainLayout langKey={langKey}>
        <Helmet title={`Impressum | ${config.siteTitle}`} />
        <Imprint />
      </MainLayout>
    </div>
  </IntlProvider>
)
