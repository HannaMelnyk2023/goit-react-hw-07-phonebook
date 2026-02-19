import ContactForm from './ContactForm';
import ContactList from './ContactsList';
import Filter from './Filter';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from '../redux/contacts/operations';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  const error = useSelector(state => state.contacts.error);
  const isLoading = useSelector(state => state.contacts.isLoading);


  return (
    <div>
      <h1>Phonebook</h1>
      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
}
export default App;
