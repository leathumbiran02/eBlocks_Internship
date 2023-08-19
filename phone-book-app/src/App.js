/* Import specific files/libraries so that they can be used in the application when it is run: */
import './App.css'; /* Stylesheet: */
import Navbar from './Navbar'; /* Navigation Bar: */
import AddPhoneBook from './pages/AddPhoneBook'; /* Add Phone Book Page: */
import AddPhoneBookEntry from './pages/AddPhoneBookEntry'; /* Add Contact To Phone Book page: */
import SearchPhone from './pages/SearchPhone'; /* Search For A Contact In A Phone Book Page: */

function App() {
  /* Create a switch statement that checks the pathname on the site, depending
  on the path, it will call that specific component and display it on the page: */

  /* Define a variable called Component: */
  let Component;

  switch(window.location.pathname){
    case "/": /* SearchPhoneBook Page: */
      Component = SearchPhone; 
      break;
    case "/AddPhoneBookEntry": /* AddPhoneBookEntry Page: */
      Component = AddPhoneBookEntry;
      break;
    case "/AddPhoneBook": /* AddPhoneBook Page: */
      Component = AddPhoneBook;
      break;
    default:
      break;
  }

  /* The content that will be displayed on the page: */
  return (
    <div>
      <head></head>
      <body>
        <header>
          {/* Calling the Navbar component: */}
          <Navbar/>
        </header>

        <div class="hero">
          {/* Calling the Component based on its case from the switch statement above: */}
          <Component/>
        </div>
      </body>
    </div>
  );
}

export default App;
