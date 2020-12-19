import React, { useState } from 'react';
import {
  Container, Row, Col, CardDeck, Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';
import CustomNavBar from '../../components/NavBar'
import projectOnePic from '../../images/project-1.png'
import projectTwoPic from '../../images/project-2.png'
import cliAppPic from '../../images/cli_app.png'

const projectInfo = [
  {
    title: "Nutritional Calculator",
    bodyText: "Find recipes that fit nutitional constraints. Search restuarants on cheat days. Track nutritional progress for the day on a progress bar.",
    image: projectOnePic,
    altImage: "Nutritional data input screen",
    buttonLink: "https://chrisgabb.github.io/recipe_app/"
  },
  {
    title: "README.md Generator",
    bodyText: "Generate a README.md for your new project using this interactive command line application",
    image: cliAppPic,
    altImage: "Team meeting (orange theme)",
    buttonLink: "https://github.com/chrisgabb/readme_generator"
  },
  {
    title: "Avail- A Peer Study Scheduler",
    bodyText: "Set up study sessions and request help from classmates using this peer study scheduler.",
    image: projectTwoPic,
    altImage: "Command Line question and answers",
    buttonLink: "http://frightening-scarecrow-12242.herokuapp.com/"
  }
]

const Portfolio = (props) => {
  return (<>
    <CustomNavBar />
    <Container>
      <Row style={{ marginTop: '5%' }}>
      <Col className="col-md-10">
        <Card>
        <CardTitle className="projectTitles" tag="h5">{projectInfo[0].title}</CardTitle>
            <CardImg style={{ width: '40%', height: "50%"}} src={projectInfo[0].image} alt={projectInfo[0].altImage} />
            <CardBody>

              <CardText>{projectInfo[0].bodyText}</CardText>
              <a href={projectInfo[0].buttonLink} target="_blank" class="btn btn-dark">Check It Out</a>
            </CardBody>
        </Card>
        </Col>
      </Row>

      <Row style={{ marginTop: '5%' }}>
        <Col className="col-md-10">
          <Card>
            <CardImg width="100%" height="60%" src={projectInfo[1].image} alt={projectInfo[1].altImage} />
            <CardBody>
              <CardTitle tag="h5">{projectInfo[1].title}</CardTitle>
              <CardText bottom width="100%">{projectInfo[1].bodyText}</CardText>
              <a href={projectInfo[1].buttonLink} target="_blank" class="btn btn-dark">Check It Out</a>
            </CardBody>
          </Card>
        </Col>
      </Row>

      <Row style={{ marginTop: '5%' }}>
        <Col className="col-md-10">
          <Card>
            <CardImg width="30%" src={projectInfo[2].image} alt={projectInfo[2].altImage} />
            <CardBody>
              <CardTitle tag="h5">{projectInfo[2].title}</CardTitle>
              <CardText>{projectInfo[2].bodyText}</CardText>
              <a href={projectInfo[2].buttonLink} target="_blank" class="btn btn-dark">Check It Out</a>
            </CardBody>
          </Card>
          </Col>
      </Row>
      </Container>
 </>)
}

export default Portfolio