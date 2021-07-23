import { useEffect, useState } from "react";
import { v4 } from "uuid";
import { HashRouter, Switch, Route } from "react-router-dom";
import api from "../api/contacts";
import "../stylesheets/App.css";
import Header from "./Header";
import AddContact from "./AddContact";
import EditContact from "./EditContact";
import ContactList from "./ContactList";
import ContactDetail from "./ContactDetail";

export default function App() {
  const [contacts, setContacts] = useState([]);

  async function retrieveContacts() {
    const response = await api.get("/contacts");
    // const retrievedContacts = await response.data;
    if (response.data) setContacts(response.data)
  }

  useEffect(() => {
    retrieveContacts();
  }, []);

  async function addContactHandler(newContact) {
    const response = await api.post("/contacts", { id: v4(), ...newContact });
    setContacts([...contacts, response.data]);
  }

  async function removeContactHandler(id) {
    await api.delete(`/contacts/${id}`);
    let filteredContacts = contacts.filter((contact) => contact.id !== id);
    setContacts(filteredContacts);
  }

  async function updateContactHandler(updatedContact) {
    const response = await api.put(
      `/contacts/${updatedContact.id}`,
      updatedContact
    );
    let updatedContacts = contacts.map((contact) =>
      contact.id === response.data.id ? response.data : contact
    );
    setContacts(updatedContacts);
  }

  return (
    <div className="ui container">
      <HashRouter basename='/'>
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
          <Route
            path="/edit"
            render={(props) => (
              <EditContact
                {...props}
                updateContactHandler={updateContactHandler}
              />
            )}
          />
          <Route
            path="/contacts/:id"
            render={(props) => <ContactDetail {...props} />}
          />
        </Switch>
      </HashRouter>
    </div>

  );
}
