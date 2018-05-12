/* @flow */
import React, { Component } from 'react'
import Helmet from 'react-helmet'
import Legal from '../components/Legal/Legal'
import config from '../../data/SiteConfig'

class LegalPage extends Component {
    render() {
        return (
            <div className="legallegallegallegallegallegallegallegal-container">
                <Helmet title={`Legal | ${config.siteTitle}`} />
                <Legal />
            </div>
        )
    }
}

export default LegalPage
