import React from 'react'; // Import React library.
import '../App.css'; // Impoort Styling sheet.

// Todo component:
/*
Todo Component that displays the content that was passed in as a prop.
The button will be used to remove a task.
The functionality for the button is in the App component as 'handleDelete',
that will remove an item from the array.
*/
const Todo = (props) => {
  return (
    <div className='list-item'>
      {props.content}
      {/* Event handler added below to trigger function when delete button is pressed. */}
      <button class="delete is-pulled-right" onClick={() => { props.onDelete(props.id) }}></button>
    </div>
  );
}

export default Todo;



