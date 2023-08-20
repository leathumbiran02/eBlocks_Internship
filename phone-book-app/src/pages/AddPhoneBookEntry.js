import React, {useState} from 'react'; 
import phoneBookData from '../db.json'; /*  .. is added to navigate up one level to locate the db.json file: */

export default function AddPhoneBookEntry(){

    /* Function of this page:

        -Insert the full name, phone number and phone book name into the phone_book_details table:
        -Have statements for successful insertion and failure to insert
        -Do relevant styling

    */

    /* State to track the selected phone book name, name and phone number: */
    const [selectedPhoneBook, setSelectedPhoneBook] = useState('');
    const [name, setName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');

    /* Retrieving phone book names from the database: */
    const phoneBookNames = phoneBookData.phone_book.map(entry => entry.phone_book_name);

    /* Function to handle when the save button is clicked: */
    const handleSave = () => {
        if (selectedPhoneBook && name && phoneNumber) {

            const selectedPhoneBookEntry = phoneBookData.phone_book.find(entry => entry.phone_book_name === selectedPhoneBook);
    
            if (selectedPhoneBookEntry) {
                /* Format the phone number before saving: */
                const formattedPhoneNumber = phoneNumber.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3');

                /* If the phone number is not the specified length, display an error alert message an return: */
                if (formattedPhoneNumber.length !== 12) {
                    alert('Phone Number Is Too Short!\nPlease Try Again.');
                    return;
                }

                // Filter the phone book details for the selected phone book:
                const selectedPhoneBookDetails = phoneBookData.phone_book_details.filter(entry => entry.phone_book_id === selectedPhoneBookEntry.id);
    
                // Check if the phone number already exists in the selected phone book details:
                const phoneNumberExists = selectedPhoneBookDetails.some(entry => entry.phone_number === formattedPhoneNumber);
    
                if (phoneNumberExists) {
                    // Phone number exists in the selected phone book, display an error message:
                    alert('This Phone Number Is Already Saved To Another Contact!\nPlease Try Again.');
                } else {
                    // Phone number does not exist in the selected phone book, proceed with saving the new entry:

                    const newEntry = {
                        id: phoneBookData.phone_book_details.length + 1,
                        phone_book_id: selectedPhoneBookEntry.id,
                        full_name: name,
                        phone_number: formattedPhoneNumber,
                    };
    
                    // Update the database with the new entry using fetch:
                    fetch('http://localhost:3000/phone_book_details', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(newEntry)
                    })
                        .then(response => response.json())
                        .then(updatedData => {
                            // Data was inserted successfully, display an alert message:
                            alert('New Entry Was Added!');
                            setName('');
                            setPhoneNumber('');
                        })
                        .catch(error => {
                            // Failed to add, display an alert message:
                            alert('Failed To Add! Please try again!');
                        });
                }
            } else {
                // Phone book name was not found, display an alert message:
                alert('Selected Phone Book Was Not Found.');
            }
        } else {
            // Any of the fields are left empty, display an error alert message:
            alert('Fields Cannot Be Left Empty!');
        }
    };   

    return(
        <div>
            <div class="spacing" style={{ marginTop:'100px' }}></div> {/* Added a div to push the content down on the page:  */}

            <div class="center-headings">
                <h1>Add New Entry</h1> {/* Heading of the page: */}
            </div>

            <div class="center-headings">
                <select id="dropdown" className="dropdown" value={selectedPhoneBook} onChange={e => setSelectedPhoneBook(e.target.value)}> 
                    <option value="" disabled selected>Select Phone Book</option>
                    {phoneBookNames.map(name => (
                        <option key={name} value={name}>
                            {name}
                        </option>
                    ))}
                </select>
            </div>

            <div class="center-headings">
                <div class="field-group">
                    <input type="text" name="name" id="name" class="input-field" placeholder="Name" autocomplete="off" value={name} onChange={e => setName(e.target.value)}></input> {/* Input field for a person's name: */}
                    <label for="name" class="input-label">Name</label>
                </div>
                <div class="field-group">
                    <input type="text" name="number" id="number" class="input-field" placeholder="number" autocomplete="off" value={phoneNumber} onChange={e => setPhoneNumber(e.target.value)}></input> {/* Input field for a person's phone number: */}
                    <label for="number" class="input-label">Number</label>
                </div>
            </div>

            <div class="button-group">
                {/* Save button: */}
                <button onClick={handleSave} className="save-button">Save</button>
                {/* Cancel button: */}
                <a href="/" class="cancel-button">cancel</a>
            </div>
        </div>
    );
}