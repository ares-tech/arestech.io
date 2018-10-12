import React from 'react'
import Helmet from 'react-helmet'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container } from 'reactstrap'
import Main from '../components/Main'
import config from '../../data/SiteConfig'
import Footer from '../components/Footer/Footer'
import '../style/custom.css'

const Section = ({ children, className }) => <div className={className}>{children}</div>

const MainLayout = ({ langKey, children }) => (
  <div className="ares index-container fluid-container">
    <Helmet title={config.siteTitle}>
      <script
        defer
        src="https://use.fontawesome.com/releases/v5.0.13/js/all.js"
        integrity="sha384-xymdQtn1n3lH2wcu0qhcdaOpQwyoarkgLVxC/wZ5q7h9gHtxICrpcaSUfygqZGOe"
        crossOrigin="anonymous"
      />
    </Helmet>
    <Section className="main">
      <Container>
        <Main />
      </Container>
      <div className="main-shape-1">
        <img alt="main-shape-1" src="/images/main-shape-1.png" width="100%" height="100%" />
      </div>
      <div className="main-shape-2">
        <img alt="main-shape-2" src="/images/main-shape-2.png" width="100%" height="100%" />
      </div>
    </Section>
    {children}
    <Footer config={config} langKey={langKey} />
  </div>
)

export default MainLayout
