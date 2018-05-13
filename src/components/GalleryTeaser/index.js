import React from 'react'
import ImageTeaser from '../ImageTeaser'
import { Container, Row, Col, Card, CardBody, CardText, CardTitle, CardSubtitle, CardLink } from 'reactstrap'

const GallaryTeaser = () => (
  <div className="bg-light">
    <Container className="py-5">
      <Row>
        <ImageTeaser src="https://picsum.photos/300/180" alt="Picture 1" title="Picture 1" desc="Description 1" />
        <ImageTeaser
          src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180"
          alt="Picture 2"
          title="Picture 2"
          desc="Description 2"
        />
        <ImageTeaser
          src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180"
          alt="Picture 3"
          title="Picture 3"
          desc="Description 3"
        />
      </Row>
      <Row>
        <ImageTeaser
          src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180"
          alt="Picture 4"
          title="Picture 4"
          desc="Description 4"
        />
        <ImageTeaser
          src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180"
          alt="Picture 5"
          title="Picture 5"
          desc="Description 5"
        />
        <ImageTeaser
          src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180"
          alt="Picture 6"
          title="Picture 6"
          desc="Description 6"
        />
      </Row>
    </Container>
  </div>
)

export default GallaryTeaser
