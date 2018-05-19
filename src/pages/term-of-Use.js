/* @flow */
import React, { Component } from 'react'
import Helmet from 'react-helmet'
import { TermOfUse } from '../components/Legal/TermOfUse'
import config from '../../data/SiteConfig'
import MainLayout from '../util/mainLayout'

class TermOfUsePage extends Component {
  render() {
    return (
      <MainLayout>
        <Helmet title={`Term of Use| ${config.siteTitle}`} />
        <TermOfUse />
      </MainLayout>
    )
  }
}

export default TermOfUsePage
