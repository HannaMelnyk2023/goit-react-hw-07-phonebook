import {ContactsListItem} from 'components/ContactsListItem/ContactsListItem';
export const ContactsList = ({ contacts, onDeleteContact, deleting }) => {
  return (
    <ul>
      {contacts.map(contact => (
        <ContactsListItem
          key={contact.id}
          id={contact.id}
          name={contact.name}
          number={contact.number}
          onDeleteContact={onDeleteContact}
          deleting={deleting}
        />
      ))}
    </ul>
  );
};
