import { Link } from 'react-router-dom';
import { useFetchContactsQuery } from 'redux/contacts/contactsSlice';
import { useDeleteContactMutation } from 'redux/contacts/contactsSlice';
import { ContactsList } from 'components/ContactsList/ContactsList';

export const ContactsPage = () => {
  const { data: contacts, isFetching } = useFetchContactsQuery();
  const [deleteContact, { isLoading: isDeleting }] = useDeleteContactMutation();

  return (
    <div>
      <Link to="/contacts/add">Add Contact</Link>
      {isFetching && <p>Loading...</p>}
      {contacts && (
        <ContactsList
          contacts={contacts}
          onDeleteContact={deleteContact}
          isLoading={isDeleting}
        />
      )}
    </div>
  );
};
