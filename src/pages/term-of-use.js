/* @flow */
import React, { Component } from 'react'
import Helmet from 'react-helmet'
import { TermOfUse } from '../components/Legal/TermOfUse'
import config from '../../data/SiteConfig'
import MainLayout from '../util/mainLayout'
import Navbar from '../components/Navbar'

class TermOfUsePage extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <MainLayout>
          <Helmet title={`Term of Use | ${config.siteTitle}`} />
          <TermOfUse />
        </MainLayout>
      </div>
    )
  }
}

export default TermOfUsePage
