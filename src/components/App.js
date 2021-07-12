import { useEffect, useState } from "react";
import { v4 } from "uuid";
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
      <Header />
      <AddContact addContactHandler={addContactHandler} />
      <ContactList
        contacts={contacts}
        removeContactHandler={removeContactHandler}
      />
    </div>
  );
}
