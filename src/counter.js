import React from 'react';

function Counter(props) {
    
  return (
    <div className={`counter${props.id}`}>
      <h1>{`counter${props.id}`}</h1>
      <p>{props.count}</p>
      <button onClick={()=>props.increaseCounter()}>Increase count</button>
      
      
    </div>
  );
}

export default Counter;