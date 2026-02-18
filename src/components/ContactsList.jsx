import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from '../redux/contacts/operations';

function ContactsList() {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts);
  const fiter = useSelector(state => state.filter);
  const isLoading = useSelector(state => state.isLoading);
  const error = useSelector(state => state.error);

  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(fiter.toLowerCase())
  );
  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <ul>
      {visibleContacts.map(contact => (
        <li key={contact.id}>
          {contact.name}: {contact.number}
          {''}
          <button onClick={() => dispatch(deleteContact(contact.id))}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}
export default ContactsList;
