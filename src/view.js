import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link, Route } from 'react-router-dom';
import './App.css';
import Button from 'react-bootstrap/Button'

 

function View(props){

  

  const buildRows = () =>  {
    return props.todos.map((current, index) => (
      <Card key={index}>
        <Card.Body>
        <Card.Title>
          {current.id}
        </Card.Title>
        <Card.Text>
          {current.description}
        </Card.Text>
        <Button onClick={props.increaseLikes}>Like</Button>
        <Card.Text>
        {current.likes}
        </Card.Text>
      </Card.Body>
      </Card>
    )
    )
  }
document.body.style = 'background: bisque;';

    return (
      <>
        {/* <Table striped bordered hover>
          <thead>
            <tr>
              <th>User ID</th>
              <th>Post</th>
              <th>Likes</th>
            </tr>
          </thead>
          <tbody> */}
            {buildRows()}
          {/* </tbody>
        </Table> */}
      </>
    );

}
export default View;
