import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';
import { Div } from './App.styled';

const App = () => {
  return (
    <Div>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </Div>
  );
};

export default App;
