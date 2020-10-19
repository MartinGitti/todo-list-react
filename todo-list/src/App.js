import React from 'react'; //Import React library.
import './App.css'; // Import Styling sheet.

// Import all Components.
import Header from './Components/Header';
import TodoList from './Components/TodoList';
import SubmitForm from './Components/SubmitForm';
import Footer from './Components/footer';

/*
  App component created, which is the parent component
  for every other component.
*/
class App extends React.Component {
  /*
   The state contains one item which is an array of strings.
   When the array gets updated, the app will re-render to show the changes.
  */
  state = {
    tasks: ['task 1', 'task 2', 'task 3']
  };

  handleSubmit = task => {
    this.setState({ tasks: [...this.state.tasks, task] });
  }

  handleDelete = (index) => {
    const newArr = [...this.state.tasks];
    newArr.splice(index, 1);
    this.setState({ tasks: newArr });
  }

  render() {
    return (
      <div className='wrapper'>
        <div className='card frame'>
          <Header />
          <TodoList tasks={this.state.tasks} onDelete={this.handleDelete} />
          <SubmitForm onFormSubmit={this.handleSubmit} />
          <Footer sumTodos={this.state.tasks.length} />
        </div>
      </div>
    );
  }
}

export default App;