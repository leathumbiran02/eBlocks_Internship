
import React, {useState} from 'react'; 
import phoneBookData from '../db.json'; /*  .. is added to navigate up one level to locate the db.json file: */

export default function SearchPhone(){

    /* Function of this page:

        -Search in the phone_book_details table for a contact based on the phone book name, full name/ phone number:
        -Have statements for successful results and failure to find anything
        -Do relevant styling

    */

    /* State to track the selected phone book name and the filter text: */
    const [selectedPhoneBook, setSelectedPhoneBook] = useState('');
    const [filterText, setFilterText] = useState('');

    /* Extract the phone book names from the data in the db.json file: */
    const phoneBookNames = phoneBookData.phone_book.map(entry => entry.phone_book_name);

    /* Function to handle the searching of contacts: */
    const handleSearch = () => {
        if (selectedPhoneBook && filterText.trim() !== '') {
            /* Find the selected phone book entry: */
            const selectedPhoneBookEntry = phoneBookData.phone_book.find(entry => entry.phone_book_name === selectedPhoneBook);
            const selectedPhoneBookId = selectedPhoneBookEntry ? selectedPhoneBookEntry.id : null;
        
            /* Filter the search results based on the phone book name and the filter text that was entered: */
            const searchResults = phoneBookData.phone_book_details.filter(detail => {
                const isMatchingPhoneBook = selectedPhoneBookId === null || detail.phone_book_id === selectedPhoneBookId;
                const isMatchingFilter = 
                    detail.full_name.toLowerCase().includes(filterText.toLowerCase()) ||
                    detail.phone_number.toString().includes(filterText);
        
                return isMatchingPhoneBook && isMatchingFilter;
            });
        
            /* If the length of the search results is greater than 0 (if a result was found) display it in an alert box: */
            if (searchResults.length > 0) {
                alert(`Contact Details:\nFull Name: ${searchResults.map(result => `${result.full_name} \nPhone Number: ${result.phone_number}`).join('\n')}`);
            } else { /* If the result was not found, display an error message in an alert box: */
                alert('No Contact Was Found! Please Try Again.');
            }
        } else { /* If phone book name or filter text is empty, or both display an error message in an alert box: */
            alert('Phone Book Name And Filter Text Cannot Be Empty!');
        }
    };
    
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
                    <input type="text" name="filter" id="filter" className="input-field" placeholder="Filter" autocomplete="off" value={filterText} onChange={e => setFilterText(e.target.value)}></input> {/* Input field for entering a value to filter by: */}
                    <label for="filter" class="input-label">Filter</label>
                </div>
            </div>

            <div class="button-group">
                {/* Search button: */}
                <input type="button" name="submit" value="search" class="save-button" onClick={handleSearch}></input>
                {/* Cancel button: */}
                <a href="/" class="cancel-button">cancel</a>
            </div>
        </div>

    );

}
