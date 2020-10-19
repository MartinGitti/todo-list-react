import React from 'react'; // Import React library.
import '../App.css'; // Impoort Styling sheet.

// Footer Component:
const Footer = (props) => {
    return (
        <div className='total-items'>
            {/* Pass in props to see the amount of items listed. 
            Also added to Header component in App for it to work.*/}
            <p>There is/are {props.sumTodos} todo items on your list!</p>
        </div>
    )
}

export default Footer;