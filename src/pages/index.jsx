import React from 'react'
import Helmet from 'react-helmet'
import PostListing from '../components/PostListing/PostListing'
import Main from '../components/Main'
import config from '../../data/SiteConfig'
import Contact from '../components/Contact'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer/Footer'
import '../style/bootstrap.css'
import '../style/custom.css'

const Index = ({ data }) => {
  const postEdges = data.allMarkdownRemark.edges
  return (
    <div className="index-container">
      <Helmet title={config.siteTitle} />
      <Navbar />
      <Main />
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
