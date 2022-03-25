import {Routes, Route, Link} from 'react-router-dom';
import React, {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar';
import './App.css';
import View from './view';
import Add from './components/Add';
import { Prev } from 'react-bootstrap/PageItem';
import { NavbarBrand } from 'react-bootstrap';
import Form from './components/Form';
import Card from 'react-bootstrap/Card'
import Login from './components/Form'

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
            <Link className="nav-link" to="/feed">Feed</Link>
            <Link className="nav-link" to="/add">Post To Feed</Link>
            <Link className="nav-link" to="/profile">Profile</Link>
            <Link className="nav-link" to="/form">Login</Link>
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
          
            <Route path='/feed' element={         
            <View todos = {todos} />
            }/>

            <Route path='/form'element={
              <Form Login = {(Username, Password) =>
                Login(Username, Password)} />
            }/>
            
            {/* <Route path='/profile'element={
              <Form profile = {(Username, Password) =>
                Login(Username, Password)} />
            }/> */}


          </Routes>
        </Container>
  {/* {/* individual cards for each user and their respective post - take routing from table on view.js and implement onto user cards
  {/* 'like' function to include a counter tallying amount of likes */}
  {/* <div style={{display: 'flex', justifyContent: 'center'}}>
    <div id='PostCard'><Card style={{ width: '18rem' }}>
  <Card.Body>
    <Card.Title>New Post</Card.Title>
    <Card.Subtitle className="mb-2 text-muted">by /USER/</Card.Subtitle>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Card.Link href="#">Like This</Card.Link>
  </Card.Body>
  </Card>
  </div>  
  </div> */}

  {/* <div style={{display: 'flex', justifyContent: 'center'}}>
    <div><Card style={{ width: '18rem' }}>
  <Card.Body>
    <Card.Title>New Post</Card.Title>
    <Card.Subtitle className="mb-2 text-muted">by /USER/</Card.Subtitle>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Card.Link href="#">Like This</Card.Link>
  </Card.Body>
  </Card>
  </div>  
  </div> */}
  {/* <div style={{display: 'flex', justifyContent: 'center'}}>
    <div><Card style={{ width: '18rem' }}>
  <Card.Body>
    <Card.Title>New Post</Card.Title>
    <Card.Subtitle className="mb-2 text-muted">by /USER/</Card.Subtitle>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Card.Link href="#">Like This</Card.Link>
  </Card.Body>
  </Card>  */}
  {/* </div>  
  </div> */}
      </div>
    );

}
export default App;