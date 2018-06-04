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
		  <meta httpEquiv="CACHE-CONTROL" content="NO-CACHE" />
          {this.props.headComponents}
          <link rel="shortcut icon" href={favicon} />
          {css}
          <script
            defer
            src="https://use.fontawesome.com/releases/v5.0.13/js/all.js"
            integrity="sha384-xymdQtn1n3lH2wcu0qhcdaOpQwyoarkgLVxC/wZ5q7h9gHtxICrpcaSUfygqZGOe"
            crossOrigin="anonymous"
          />
        </head>
        <body>
          <div id="___gatsby" dangerouslySetInnerHTML={{ __html: this.props.body }} />
          {this.props.postBodyComponents}
        </body>
      </html>
    )
  }
}
