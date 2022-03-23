import React from 'react';
import Table from 'react-bootstrap/Table';
import './App.css';

function View(props){



  const buildRows = () =>  {
    return props.todos.map((current) => (
      <tr key={current.id}>
        <td>
          {current.id}
        </td>
        <td>
          {current.description}
        </td>
        <td>
          {/* likes counter */}
        </td>
      </tr>
    )
    )
  }


    return (
      <>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>User ID</th>
              <th>Post</th>
              <th>Likes</th>
            </tr>
          </thead>
          <tbody>
            {buildRows()}
          </tbody>
        </Table>
      </>
    );

}
export default View;
