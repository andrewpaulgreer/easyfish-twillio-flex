import React from 'react';


// It is recommended to keep components stateless and use redux for managing states
const TodoTaskComponent = (props) => {
  if (!props.isOpen) {
    return null;
  }

  return (

     <div>
       <br />
       <hr />
       <h1>TO DO</h1>
       <ul>
         <li>Answer Task</li>
         <li>Locate Customer's Record</li>
         <li>Find Relevant Account Details</li>
         <li>Resolve the customer's support issue</li>
         <li>Complete the task</li>
       </ul>
     </div>

  );
};

export default TodoTaskComponent;
