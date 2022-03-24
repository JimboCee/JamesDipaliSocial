import React, {useState} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import toastr from 'toastr';
import 'toastr/build/toastr.min.css'

function Add(props){
    const [state, changeState] = useState({
        id: 0,
        Password: "",
        completed: false
    })

    const handleChange = (event) => {
        const newState = {...state};
        if (event.target.name === "completed"){
            newState[event.target.name] = !state.completed
        } else { 
            newState[event.target.name]=event.target.value;
        }
        changeState(newState)
    }
    toastr.options = {
        "closeButton": false,
        "debug": false,
        "newestOnTop": false,
        "progressBar": true,
        "positionClass": "toast-top-center",
        "preventDuplicates": false,
        "onclick": null,
        "showDuration": "300",
        "hideDuration": "1000",
        "timeOut": "5000",
        "extendedTimeOut": "1000",
        "showEasing": "swing",
        "hideEasing": "linear",
        "showMethod": "fadeIn",
        "hideMethod": "fadeOut"
      }

    const submithandler = (e) =>{
        e.preventDefault();
        props.updateList(state.id, state.Password, state.completed)
        // command: toastr["success"] ("Post Successful")
        changeState({
            id: 0,
            Password: "",
            completed: false
        })
    }
    return(
        <div className="container">
          <Form onSubmit={(e)=> submithandler(e)}>
            
            <Form.Group controlId="Username" >
              <Form.Label>Enter Username</Form.Label>
              <Form.Control 
              name="id" 
              type="text" 
              value={state.id} 
              onChange={(e) => handleChange(e)} />
            </Form.Group>
            
            <Form.Group controlId="Password" >
              <Form.Label>Enter Password</Form.Label>
              <Form.Control 
              name="Password" 
              type="text" 
              value={state.Password} 
              onChange={(e) => handleChange(e)}/>
            </Form.Group>
            
            
             <Button variant="primary" 
                type="submit">Login</Button>
    
          </Form>
        </div>
      )
    }
    export default Add;
