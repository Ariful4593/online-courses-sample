import React, { useState } from 'react';
import './App.css';
import CourseData from './components/Course/CourseData'
import Course from './components/Course/Course';
import Cart from './components/Cart/Cart';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
function App() {
  const [cart,setCart] = useState([]);
  const enrollHandle = (x) =>{
    console.log("btn clicked", x);
    const newCart = [...cart, x];
    setCart(newCart);
  }
  return (
    <Container className="mw-100 p-0">
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-info">Search</Button>
        </Form>
      </Navbar>
      <Row className="mw-100">
        <Col xs={10} className="pr-0 pt-2">
          
          {
            CourseData.map(x => <Course course={x} enrollHandle={enrollHandle}></Course>)
          }
          
          
        </Col>
        <Col xs={2} className="mw-100 pl-0 pt-2">
        <Cart cart={cart}></Cart>
        </Col>
      </Row>
    </Container>

    
  );
}


export default App;
