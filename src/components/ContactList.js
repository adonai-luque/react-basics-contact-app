import { Link } from "react-router-dom";
import ContactCard from "./ContactCard";

export default function ContactList({ contacts, removeContactHandler }) {
  return (
    <div className="main">
      <div className="header">
        <h2>Contact List</h2>
        <Link to="/add">
          <button className="ui button blue right">Add Contact</button>
        </Link>
      </div>
      <div className="ui celled list">
        {contacts.map((contact) => {
          return (
            <ContactCard
              contact={contact}
              removeContactHandler={function () {
                removeContactHandler(contact.id);
              }}
              key={contact.id}
            />
          );
        })}
      </div>
    </div>
  );
}
