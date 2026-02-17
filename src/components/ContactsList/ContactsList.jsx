export const ContactsList = ({ contacts, onDeleteContact, deleting}) => {
  return (
    <ul>
      {contacts.map(contact => (
        <li key={contact.id}>
          {contact.name}: {contact.number}
          <button onClick={() => onDeleteContact(contact.id)} disabled={deleting}>
           {deleting ? "Deleting..." : "Delete"}
          </button>
        </li>
      ))}
    </ul>
  );
};
