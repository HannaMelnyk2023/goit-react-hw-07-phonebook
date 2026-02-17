import { Toaster } from 'react-toastify';
import { Switch, Route } from 'react-router-dom';
import { ContactsPage } from 'pages/contacts';
import { CreateContactPage } from 'pages/CreateContact';
import { HomePage } from 'pages/HomePage';

export const App = () => {
  return (
    <>
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/contacts" exact>
          <ContactsPage />
        </Route>
        <Route path="/contacts/add" exact>
          <CreateContactPage />
        </Route>
      </Switch>
      <Toaster position="top-right" />
    </>
  );
};
