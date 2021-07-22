import { useState } from 'react';
import { Link } from "react-router-dom";
import ContactCard from "./ContactCard";

export default function ContactList({ contacts, removeContactHandler }) {
  const [keyword, setKeyword] = useState("")
  function keywordFound(contact, keyword) {
    const name = contact.name.toLowerCase()
    const email = contact.email.toLowerCase()
    const term = keyword.toLowerCase()
    return ((name.search(term) !== -1) || (email.search(term)) !== -1)
  }
  return (
    <div className="main">
      <div className="header">
        <h2>Contact List</h2>
        <Link to="/add">
          <button className="ui button blue right">Add Contact</button>
        </Link>
      </div>
      <div className="ui search">
        <div className="ui icon input">
          <input
            className="prompt"
            type="text"
            placeholder="Search Contacts"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
          />
          <i className="search icon"></i>
        </div>
      </div>
      <div className="ui celled list">
        {contacts.map((contact) => {
          return keywordFound(contact, keyword) ? (
            <ContactCard
              contact={contact}
              removeContactHandler={function () {
                removeContactHandler(contact.id);
              }}
              key={contact.id}
            />
          ) : null
        })}
      </div>
    </div>
  );
}
