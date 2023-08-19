
function AddPhoneBookEntry(){

    /* Function of this page:

        -Insert the full name, phone number and phone book name into the phone_book_details table:
        -Have statements for successful insertion and failure to insert
        -Do relevant styling

    */
    return(
        <div>
            <div class="spacing" style={{ marginTop:'100px' }}></div> {/* Added a div to push the content down on the page:  */}

            <div class="center-headings">
                <h1>Add New Entry</h1> {/* Heading of the page: */}
            </div>

            <div class="center-headings">
                <select id="dropdown" class="dropdown"> 
                    <option value="" disabled selected>Select Phone Book</option>
                    <option>test1</option>
                    <option>test1</option>
                </select>
            </div>

            <div class="center-headings">
                <div class="field-group">
                    <input type="text" name="name" id="name" class="input-field" placeholder="Name" autocomplete="off"></input> {/* Input field for a person's name: */}
                    <label for="name" class="input-label">Name</label>
                </div>
                <div class="field-group">
                    <input type="text" name="number" id="number" class="input-field" placeholder="number" autocomplete="off"></input> {/* Input field for a person's phone number: */}
                    <label for="number" class="input-label">Number</label>
                </div>
            </div>

            <div class="button-group">
                <input type="submit" name="submit" value="save" class="save-button"></input>
                <a href="/" class="cancel-button">cancel</a>
            </div>
        </div>
    );
}

export default AddPhoneBookEntry;
