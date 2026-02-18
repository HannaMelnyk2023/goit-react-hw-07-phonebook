import { Link } from 'react-router-dom';
import { useFetchContactsQuery } from 'redux/contacts/contactsSlice';
import { ContactsList } from 'components/ContactsList/ContactsList';

export const ContactsPage = () => {
  const { data: contacts, isFetching } = useFetchContactsQuery();


  return (
    <div>
      <Link to="/contacts/create">Create</Link>
      {isFetching && <p>Loading...</p>}
      {contacts && (
        <ContactsList
          contacts={contacts} 
        />
      )}
    </div>
  );
};
