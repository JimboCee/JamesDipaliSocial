import {Routes, Route, Link} from 'react-router-dom';
import React, {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav'
import Card from 'react-bootstrap/Card'
import { CardGroup } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import './App.css';
import View from './view';
import Add from './Add';
import { Prev } from 'react-bootstrap/PageItem';
import { NavbarBrand } from 'react-bootstrap';


function App(){

  const updateList =(id, description, completed) =>{
    const listItem = {id, description, completed}
    localStorage.setItem("list", JSON.stringify([...todos, listItem]),
    changeTodos((prevState) => [...prevState, listItem])
    
  )}

  const [todos, changeTodos] = useState ([]) 
    useEffect(() => {
    const listContents = localStorage.getItem("list");
    changeTodos(JSON.parse(listContents)||[])
    },[])

    return (
      <div>
        <Navbar bg="light" expand="md">
         <Navbar.Brand>Social Site</Navbar.Brand>
         <Navbar.Toggle aria-controls="basic-navbar-nav" />
         <Navbar.Collapse id="basic-navbar-nav">
           <Nav className="mr-auto">
            <Link className="nav-link" to="/">Feed</Link>
            <Link className="nav-link" to="/add">Post To Feed</Link>
            <Link className="nav-link" to="/">Profile</Link>
           </Nav>
        </Navbar.Collapse> 
        </Navbar>
        <Container>
          <Routes>
            <Route index element={
              <View todos = {todos} />
            }/>
            
            <Route path="/add" element={
            <Add updateList={(id, description, completed) => 
              updateList(id, description, completed)} 
              />
            }/>
          
            <Route path='/view' element={         
            <View todos = {todos} />
            }/>


          </Routes>
        </Container>

        <CardGroup>
  <Card>
    <Card.Img variant="top" src="holder.js/100px160" />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src="holder.js/100px160" />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This card has supporting text below as a natural lead-in to additional
        content.{' '}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src="holder.js/100px160" />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This card has even longer content than the first to
        show that equal height action.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
</CardGroup>

      </div>
    );

}
export default App;