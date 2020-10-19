import React from 'react'; // Import React library.
import '../App.css'; // Impoort Styling sheet.
import Todo from '../Components/Todo'; // Import Todo component.

// TodoList Component:
/* This component allows us to have access to all of 
the todo items by passing through the 'tasks' as a prop.
We then extract each each todo into its own component
by using the map function. */
const TodoList = (props) => {
  const todos = props.tasks.map((todo, index) => {
    return <Todo content={todo} key={index} id={index} onDelete={props.onDelete} />
  })
  return (
    <div className='list-wrapper'>
      {todos}
    </div>
  );
}

export default TodoList;
