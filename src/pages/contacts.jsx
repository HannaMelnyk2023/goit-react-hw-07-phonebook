import { useFetchContactsQuery } from 'redux/contacts/contactsSlice';
import { ContactsList } from 'components/Contacts/ContactsList';  


export const ContactsPage = () => {
const { data: contacts, isFetching } = useFetchContactsQuery();

  return <div>
    {isFetching && <p>Loading...</p>}
    {contacts && <ContactsList contacts={contacts} />}
  </div>
};