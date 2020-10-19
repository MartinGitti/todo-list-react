import React from 'react'; // Import React library.
import '../App.css'; // Impoort Styling sheet.
import 'bulma/css/bulma.css'; // Bulma css styling added.

/*
SubmitForm component that renders the text input and the "add" button.
*/
class SubmitForm extends React.Component {
  // Statte added with 'term' key which represents the text that is in the text input field.
    state = { term: '' };
  // The 'handleSubmit' function is called when the submit button or enter key is pressed. 
    handleSubmit = (e) => {
      // The code below prevent the pafe from automatically refreshing when the form is submitted.
      e.preventDefault();
      /*
       If statement that will act accordingly depending on outcome.
       When an item is added to the list, the input field will reset.
       */
      if(this.state.term === '') return;
      this.props.onFormSubmit(this.state.term);
      this.setState({ term: '' });
    }
  
    render() {
      return(
        <form onSubmit={this.handleSubmit}>
          <input 
            type='text'
            className='input'
            placeholder='Enter Item'
            value={this.state.term}
            onChange={(e) => this.setState({term: e.target.value})}
          />
          <button className='button'>Add</button>
        </form>
      );
    }
  }

export default SubmitForm;
