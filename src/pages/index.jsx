import React from 'react'
import Helmet from 'react-helmet'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container } from 'reactstrap'
import Main from '../components/Main'
import config from '../../data/SiteConfig'
import Contact from '../components/Contact'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer/Footer'
import GalleryTeaser from '../components/GalleryTeaser'
import IntroSection from '../components/IntroSection'
import Ecosystem from '../components/Ecosystem'
import Team from '../components/Team'
import '../style/custom.css'

const Section = ({ children, className }) => <div className={className}>{children}</div>
const Index = ({ data }) => {
  return (
    <div className="ares index-container fluid-container">
      <Helmet title={config.siteTitle} />
      <Section className="main pb-5">
        <Navbar />
        <Container>
          <Main />
        </Container>
      </Section>
      <Section>
        <GalleryTeaser />
      </Section>
      <Section>
        <IntroSection />
      </Section>
      <Section>
        <Ecosystem />
      </Section>
      <Section>
        <Team />
      </Section>
      <Contact config={config} />
      <Footer config={config} />
    </div>
  )
}

export default Index

/* eslint no-undef: "off"*/
export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(limit: 2000, sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          fields {
            slug
          }
          excerpt
          timeToRead
          frontmatter {
            title
            tags
            cover
            date
          }
        }
      }
    }
  }
`
