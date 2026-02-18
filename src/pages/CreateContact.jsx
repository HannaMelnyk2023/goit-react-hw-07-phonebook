import { useCreateContactsMutation } from '../redux/contacts/contactsSlice';
import { useHistory, Redirect } from 'react-router-dom';
import { Spinner } from 'components/Spinner/Spinner';

export const CreateContactPage = () => {
  // const history = useHistory();
  const [createContact, { isLoading, isSuccess }] = useCreateContactsMutation();
  const handleSubmit = async e => {
    e.preventDefault();
     e.currentTarget.reset();
       createContact({
      name: e.currentTarget.elements[0].value,
      number: e.currentTarget.elements[1].value,
    });

    // try {
    //   await createContact({
    //     name: e.currentTarget.elements[0].value,
    //     number: e.currentTarget.elements[1].value,
    //   });
    //   history.push('/contacts');
    // }
    //   catch (error) {
    //     console.log('error', error);
    //   }

    // console.log(e.currentTarget.elements.content.value);

    // const form = e.target;
    // const name = form.elements[0].value;
    // const number = form.elements[1].value;
    // createContact({ name, number });
    // form.reset();
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
