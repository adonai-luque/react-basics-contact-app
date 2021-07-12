import ContactCard from "./ContactCard";

export default function ContactList(props) {
  return (
    <div className="ui celled list">
      {props.contacts.map((contact) => {
        return (
          <ContactCard
            contact={contact}
            removeContactHandler={() => props.removeContactHandler(contact.id)}
            key={contact.id}
          />
        );
      })}
    </div>
  );
}
