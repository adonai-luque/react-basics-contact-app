import { useEffect, useState } from "react";
import { v4 } from "uuid";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import api from "../api/contacts";
import "../stylesheets/App.css";
import Header from "./Header";
import AddContact from "./AddContact";
import EditContact from "./EditContact";
import ContactList from "./ContactList";
import ContactDetail from "./ContactDetail";

export default function App() {
  // const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState([]);

  async function retrieveContacts() {
    const response = await api.get("/contacts");
    return response.data;
  }

  useEffect(() => {
    async function getAllContacts() {
      const allContacts = await retrieveContacts();
      if (allContacts) setContacts(allContacts);
    }
    getAllContacts();
    console.log("Getting contacts from API");
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
    await api.put(`/contacts/${updatedContact.id}`, updatedContact);
    let updatedContacts = contacts.map((contact) => (contact.id === updatedContact.id) ? updatedContact : contact );
    setContacts(updatedContacts);
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
          <Route
            path="/edit"
            render={(props) => (
              <EditContact {...props} updateContactHandler={updateContactHandler} />
            )}
          />
          <Route
            path="/contacts/:id"
            render={(props) => <ContactDetail {...props} />}
          />
        </Switch>
      </Router>
    </div>
  );
}
