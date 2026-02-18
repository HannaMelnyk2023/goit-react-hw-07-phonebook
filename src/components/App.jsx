import ContactForm from "./ContactForm";
import ContactList from "./ContactsList";
import Filter from "./Filter";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchContacts } from "../redux/contacts/operations";



function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts())
    .then(res => console.log(res));
  }, [dispatch]);

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
}
export default App;
