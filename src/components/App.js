import { useEffect, useState } from "react";
import { v4 } from "uuid";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "../stylesheets/App.css";
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";

export default function App() {
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const retrievedContacts = JSON.parse(
      localStorage.getItem(LOCAL_STORAGE_KEY)
    );
    if (retrievedContacts) setContacts(retrievedContacts);
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  function addContactHandler(newContact) {
    setContacts([...contacts, { id: v4(), ...newContact }]);
  }

  function removeContactHandler(id) {
    let filteredContacts = contacts.filter((contact) => contact.id !== id);
    setContacts(filteredContacts);
  }

  return (
    <div className="ui container">
      <Router>
        <Header />
        <Switch>
          <Route
            path="/"
            exact
            render={(props) => (
              <ContactList
                {...props}
                contacts={contacts}
                removeContactHandler={removeContactHandler}
              />
            )}
          />
          <Route
            path="/add"
            render={(props) => (
              <AddContact {...props} addContactHandler={addContactHandler} />
            )}
          />
        </Switch>
      </Router>
    </div>
  );
}
