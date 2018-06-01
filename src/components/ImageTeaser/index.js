import React from 'react'
import { Col, Card, CardBody, CardTitle, CardSubtitle, CardLink } from 'reactstrap'
import Lightbox from 'react-image-lightbox'
import './index.css'

class ImageTeaser extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = { isOpen: false }
  }

  render() {
    const { src, title, desc, link } = this.props
    return (
      <Col
        className="pb-5"
        md={4}
      >
        <Card
          className="image-teaser"
          md={4}
          style={{cursor: 'pointer'}}
          onClick={ () => window.open(link, '_blank') }
        >
          <div
            className="image-container container"
            style={{
              backgroundBlendMode: 'multiply',
              backgroundSize: 'contain',
              backgroundImage: `radial-gradient(circle at 2% 86%, rgb(183, 191, 193), rgb(236, 231, 229) 54%, rgb(167, 162, 157)), url(${src})`,
            }}
            role="presentation"
            onClick={() => this.setState({ isOpen: true })}
            onKeyDown={() => {}}
          />
          <CardBody>
            {title.length > 0 && <CardTitle>{title}</CardTitle>}
            {desc.length > 0 && <CardSubtitle>{desc}</CardSubtitle>}
          </CardBody>
        </Card>
        {this.state.isOpen && <Lightbox mainSrc={src} onCloseRequest={() => this.setState({ isOpen: false })} />}
      </Col>
    )
  }
}

export default ImageTeaser
