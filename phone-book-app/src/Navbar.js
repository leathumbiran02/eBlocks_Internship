export default function Navbar(){
    return (
    <nav class="navbar">
        <ul>
            <li><a href="/">PhoneBook</a></li> {/* First Page: SearchPhoneBook */}
            <li><a href="/AddPhoneBookEntry">Add Entry</a></li> {/* Second Page: AddPhoneBookEntry */}
            <li><a href="/AddPhoneBook">Add PhoneBook</a></li> {/* Third Page: AddPhoneBook */}
        </ul>
    </nav>
    );
}
