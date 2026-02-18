import { useCreateContactsMutation } from '../redux/contacts/contactsSlice';
import { Redirect } from 'react-router-dom';
import { Spinner } from 'components/Spinner/Spinner';

export const CreateContactPage = () => {
 
  const [createContact, { isLoading, isSuccess }] = useCreateContactsMutation();
  const handleSubmit = async e => {
    e.preventDefault();
     e.currentTarget.reset();
       createContact({
      name: e.currentTarget.elements[0].value,
      number: e.currentTarget.elements[1].value,
    });

  };
  return (
  <>
    {isSuccess && <Redirect to="/contacts" />}
    
      <form autoComplete="off" onSubmit={handleSubmit}>
        <input type="text" placeholder="Name" />
        <input type="text" placeholder="Number" />
        <button type="submit" disabled={isLoading}>
          {isLoading && <Spinner size={12} />}
          Create
        </button>
      </form>
  </>
  );
};
