import React, { useState } from 'react';
import CustomNavBar from '../../components/NavBar'
import CustomJumbotron from '../../components/Jumbotron'
import CustomCarousel from '../../components/Carousel'
import {
    Container, Row, Col, FormGroup, Form, Input, Label, Button
  } from 'reactstrap';


const Contact = (props) => {


    return(<>
      <CustomNavBar />
      <Container style={{marginTop: '3%'}}>
    <Row>
        <Col className= "col-md-10">
      <Form>
      <FormGroup>
        <Label for="fullName">Full Name</Label>
        <Input type="name" name="fullName" id="fullNameText" placeholder="Jane Smith" />
      </FormGroup>
      <FormGroup>
        <Label for="exampleEmail">Email</Label>
        <Input type="email" name="email" id="Email" placeholder="jane.smith@tech.com" />
      </FormGroup>
      <FormGroup>
        <Label for="exampleText">Message</Label>
        <Input type="textarea" name="text" id="exampleText" />
      </FormGroup>
      <Button>Submit</Button>
    </Form>
    </Col>
    </Row>
    </Container>
    </>)
}


export default Contact