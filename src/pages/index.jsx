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
import Media from '../components/Media'
import Partners from '../components/Partners'
import Ecosystem from '../components/Ecosystem'
import Roadmap from '../components/Roadmap'
import TokenDetail from '../components/TokenDetail'
import TokenSale from '../components/TokenSale'
import TokenUsage from '../components/TokenUsage'
import Team from '../components/Team'
import '../style/custom.css'

const Section = ({ children, className }) => <div className={className}>{children}</div>
class Index extends React.PureComponent {
  render() {
    return (
      <div className="ares index-container fluid-container">
        <Helmet title={config.siteTitle} />
        <Section className="main pb-5">
          <Navbar />
          <Container>
            <Main />
          </Container>
          <div className="main-shape-1">
            <img src="/images/main-shape-1.png" width="100%" height="100%" />
          </div>
          <div className="main-shape-2">
            <img src="/images/main-shape-2.png" width="100%" height="100%" />
          </div>
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
        <Section>
          <Roadmap />
        </Section>
        <Section>
          <Media />
        </Section>
        <Section>
          <Partners />
        </Section>
        <Section>
          <TokenDetail />
        </Section>
        <Section>
          <TokenSale />
        </Section>
        <Section>
          <TokenUsage />
        </Section>
        <Contact config={config} />
        <Footer config={config} />
      </div>
    )
  }
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
