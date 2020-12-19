import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, Col
} from 'reactstrap';

const CustomCard = (props) => {
  return (
    <>
      <Col>
        <Card>
          <CardImg top width="100%" src={props.info.image} alt={props.info.altImage} />
          <CardBody>
            <CardTitle tag="h5">{props.info.title}</CardTitle>
            <CardText>{props.info.bodyText}</CardText>
            <a href={props.info.buttonLink} class="btn btn-dark">Check It Out</a>
          </CardBody>
        </Card>
      </Col>
    </>
  );
};

export default CustomCard;