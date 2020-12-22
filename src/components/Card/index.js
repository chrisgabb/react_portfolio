import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, Col, Container, CarouselControl
} from 'reactstrap';


const CustomCard = (props) => {
  return (
    <>
    <Container >
      <Col className="col-md-12">
        <Card>
          <CardImg src={props.image} alt={props.altImage} />
          <CardBody>
            <CardTitle tag="h5">{props.title}</CardTitle>
            <CardText>{props.bodyText}</CardText>
            <a href={props.buttonLink} class="btn btn-dark">Deployed</a>
          </CardBody>
        </Card>
      </Col>
      </Container>
    </>
  );
};

export default CustomCard;