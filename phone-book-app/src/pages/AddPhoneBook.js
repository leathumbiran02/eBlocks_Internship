
import React, {useState} from 'react';

function AddPhoneBook(){

    /* Function of this page:

        -Insert the phone book name into the phone_books table:
        -Have statements for successful insertion and failure to insert
        -Do relevant styling

    */

    /* State to store the value of the phone book name from the text box: */
    const [phoneBookName, setPhoneBookName] = useState('');

    /* Function to handle when the save button is clicked: */
    const handleSave = () => {

        if(phoneBookName) {/* Checks if phone book name is empty: */
            /* Fetches the data from the phone book by passing in the url on the JSON server: */
            fetch('http://localhost:3000/phone_book')
            .then((response) => response.json())
            .then((data) => {
                /* Fetch the ids of phone books in the table: */
                const ids = data.map((item) => item.id);

                /* Calculate the next available id to use: */
                const nextID = Math.max(...ids) + 1;

                /* Create a new phone book object: */
                const newPhoneBook = {
                    id: nextID, /* Use the next available id: */
                    phone_book_name: phoneBookName,
                };

                /* POST the new phone book data to the JSON server: */
                fetch('http://localhost:3000/phone_book', {
                    method:'POST',
                    headers:{
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(newPhoneBook),
                })
                .then((response) => response.json())
                .then((data) =>{
                    alert(`${phoneBookName} Phone Book Was Added!`); /* Display an alert message if the phone book name was saved: */
                    /* Clear the data in the text box: */
                    setPhoneBookName('');
                })
                .catch((error) =>{
                    alert('Phone Book Could Not Be Added!\nPlease Try Again!'); /* Display an alert message if the phone book name failed to save: */
                });
            })
            .catch((error) =>{
                alert('Could Not Fetch The Phone Books!\nPlease Try Again!'); /* Display an alert message if the ids of the phone book names could not be fetched, this could indicate that the JSON server was down: */
            })
        }
    };

    return(
        <div>
            <div class="spacing" style={{ marginTop:'100px' }}></div> {/* Added a div to push the content down on the page:  */}

            <div class="center-headings">
                <h1>Add New Phone Book</h1> {/* Heading of the page: */}
            </div>

            <div class="center-headings">
                <div class="field-group">
                    <input type="text" name="phone_book_name" id="phone_book_name" class="input-field" placeholder="Phone Book Name" autocomplete="off" value={phoneBookName} onChange={(e) => setPhoneBookName(e.target.value)} /> {/* Input field for phone book name: */}
                    
                    <label htmlFor="phone_book_name" class="input-label">Phone Book Name</label> {/* Text that appears inside the textbox: */}

                    <div class="button-group">
                        {/* Save button: */}
                        <button onClick={handleSave} className="save-button">Save</button>
                        {/* Cancel button: */}
                        <a href="/" class="cancel-button">cancel</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AddPhoneBook;