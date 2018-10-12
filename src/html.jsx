/* eslint import/no-unresolved:off */
/* eslint import/extensions:off */
/* eslint global-require:off */
import React from 'react'
import favicon from './favicon.png'

let inlinedStyles = ''
if (process.env.NODE_ENV === 'production') {
  try {
    /* eslint import/no-webpack-loader-syntax: off */
    inlinedStyles = require('!raw-loader!../public/styles.css')
  } catch (e) {
    /* eslint no-console: off */
    console.log(e)
  }
}

export default class HTML extends React.Component {
  render() {
    let css
    if (process.env.NODE_ENV === 'production') {
      css = <style id="gatsby-inlined-css" dangerouslySetInnerHTML={{ __html: inlinedStyles }} />
    }
    return (
      <html lang="en">
        <head>
          <meta charSet="utf-8" />
          <meta property="fb:app_id" content="182424795798711" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta httpEquiv="CACHE-CONTROL" content="no-cache, no-store, must-revalidate" />
          <meta httpEquiv="Pragma" content="no-cache" />
          <meta httpEquiv="Expires" content="0" />
          <!-- Open Graph Data -->
          <meta property="og:site_name" content="arestech"/>
          <meta property="og:url" content="https://arestech.io">
          <meta property="og:title" content="Blockchain. Gaming. Network.">
          <meta property="og:description" content="Scalable Blockchain All-in-One Solution for Social Game Creators">
          <meta property="og:image" content="https://arestech.io/preview.png">
          {this.props.headComponents}
          <link rel="shortcut icon" href={favicon} />
          {css}
        </head>
        <body>
          <div id="___gatsby" dangerouslySetInnerHTML={{ __html: this.props.body }} />
          {this.props.postBodyComponents}
        </body>
      </html>
    )
  }
}
