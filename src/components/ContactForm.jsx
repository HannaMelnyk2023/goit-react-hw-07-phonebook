import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addContacts } from '../redux/contacts/operations';

function ContactForm() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleSubmit = e => {
      e.preventDefault();
      if (!name.trim() || !number.trim()) {
          alert('Заповніть усе, будь ласка, а то шо попало!');
          return;
      }
      
    dispatch(addContacts({ name, phone: number }));
    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
          required
        />
          </label>
          <br/>
      <label>
        Number:
        <input
          type="text"
          value={number}
          onChange={e => setNumber(e.target.value)}
          required
        />
          </label>
          <br/>
      <button type="submit">Add Contact</button>
    </form>
  );
}
export default ContactForm;
