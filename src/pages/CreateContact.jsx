import { useCreateContactsMutation } from '../redux/contacts/contactsSlice';

export const CreateContactPage = () => {
  const [createContact] = useCreateContactsMutation();
  const handleSubmit = e => {
    e.preventDefault();
    console.log(e.currentTarget.elements.content.value);
    createContact({
      name: e.currentTarget.elements[0].value,
      number: e.currentTarget.elements[1].value,
    });
      e.target.reset();
    // const form = e.target;
    // const name = form.elements[0].value;
    // const number = form.elements[1].value;
    // createContact({ name, number });
    // form.reset();
  };
  return (
    <div>
      <form autoComplete="off" onSubmit={handleSubmit}>
        <input type="text" placeholder="Name" />
        <input type="text" placeholder="Number" />
        <button type="submit">Create</button>
      </form>
    </div>
  );
};
