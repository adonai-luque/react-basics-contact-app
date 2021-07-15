import ContactCard from "./ContactCard";

export default function ContactList({ contacts, removeContactHandler }) {
  return (
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
  );
}
