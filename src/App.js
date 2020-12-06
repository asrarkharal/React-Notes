import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Form from 'react-bootstrap/Form';
//import ListGroup from 'react-bootstrap/ListGroup';
import Greet from './components/Greet';
import Mylist from './components/NoteList';



function App() {
  return (
    <Container>
    <Jumbotron>
  <h1>My Notes Editor</h1>
  <Greet greetName ="Asrar"></Greet>
  
  </Jumbotron>
   
  <Row>

    <Col  md={4} sm={6} xs ={12}>
    <Row>
    <Col className = "mb-2" md = {12} sm ={12} >
    <Button variant="dark" size = 'sm' block>New Note</Button>{' '}
    </Col>
    </Row>

    <Row>
      <Col md = {12} sm ={12}>
      <Mylist></Mylist>
      </Col>
    </Row>
    </Col>

    <Col md={8} sm={6} xs ={12}>

  <Row>
    <Col md={12} sm = {12} lg= {12}>
      <Form.Group controlId="formBasicEmail">
      <Form.Label>Tile</Form.Label>
      <Form.Control type="input" placeholder="My Story Title" />
      <Form.Text className="text-muted">Please Enter Some Text before Saving it.</Form.Text>
      </Form.Group>
    </Col>
  </Row>


  <Row>
      <Col md={12} sm = {12} lg= {12}>
        <Form>
        <Form.Group controlId="exampleForm.ControlTextarea1">
        <Form.Label>Note</Form.Label>
        <Form.Control as="textarea" rows={3} />
        </Form.Group>
      </Form>
      </Col>
  </Row>    

  <Row>
      <Col sm={12} md={12}>
         <Button variant="danger">Delete</Button>{' '}
         <Button variant="success">Save</Button>{' '}
      </Col>
  </Row>   
    
    </Col>

  </Row>
  
</Container>
  );
}

export default App;
