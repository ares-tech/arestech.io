import React from 'react'
import Helmet from 'react-helmet'
import PostListing from '../components/PostListing/PostListing'
import Main from '../components/Main'
import config from '../../data/SiteConfig'
import Contact from '../components/Contact'
import Footer from '../components/Footer/Footer'

class Index extends React.Component {
  render() {
    const postEdges = this.props.data.allMarkdownRemark.edges
    return (
      <div className="index-container">
        <Helmet title={config.siteTitle} />
        <Main />
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
