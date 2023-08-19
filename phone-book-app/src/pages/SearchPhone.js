
import React, {useState} from 'react'; 
import phoneBookData from '../db.json'; /*  .. is added to navigate up one level to locate the db.json file: */

export default function SearchPhone(){

    /* Function of this page:

        -Search in the phone_book_details table for a contact based on the phone book name, full name/ phone number:
        -Have statements for successful results and failure to find anything
        -Do relevant styling

    */

    const [selectedPhoneBook, setSelectedPhoneBook] = useState('');

    const phoneBookNames = phoneBookData.phone_book.map(entry => entry.phone_book_name);

    return(
        <div>
            <div class="spacing" style={{ marginTop:'100px' }}></div> {/* Added a div to push the content down on the page:  */}

            <div class="center-headings">
            <h1>Search In Phone Book</h1> {/* Heading of the page: */}
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
                    <input type="text" name="filter" id="filter" class="input-field" placeholder="Filter" autocomplete="off"></input> {/* Input field for entering a value to filter by: */}
                    <label for="filer" class="input-label">Filter</label>
                </div>
            </div>

            <div class="button-group">
                <input type="submit" name="submit" value="search" class="save-button"></input>
                <a href="/" class="cancel-button">cancel</a>
            </div>
        </div>

    );

}
