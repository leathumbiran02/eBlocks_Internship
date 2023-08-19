
function AddPhoneBook(){

    /* Function of this page:

        -Insert the phone book name into the phone_books table:
        -Have statements for successful insertion and failure to insert
        -Do relevant styling

    */
    return(
        <div>
            <div class="spacing" style={{ marginTop:'100px' }}></div> {/* Added a div to push the content down on the page:  */}

            <div class="center-headings">
                <h1>Add New Phone Book</h1> {/* Heading of the page: */}
            </div>

                <div class="field-group">
                    <form>
                        <input type="text" name="phone_book_name" id="phone_book_name" class="input-field" placeholder="Phone Book Name" autocomplete="off"></input> {/* Input field for phone book name: */}
                        <label for="phone_book_name" class="input-label">Phone Book Name</label>
                        <input type="submit" name="submit" value="save" class="save-button"></input>
                    </form>

                   <a href="/" class="cancel-button">cancel</a>
                </div>
        </div>
    );
}

export default AddPhoneBook;