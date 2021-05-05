import ContactCard from "./ContactCard";

const ContactList = ({ contacts, removeContactHandler }) => {
  const erasedContactIdHandler = (id) => {
    removeContactHandler(id);
  };

  return (
    <div className="ui celled list">
      {contacts.map((contact) => {
        return (
          <ContactCard
            contact={contact}
            erasedContactIdHandler={erasedContactIdHandler}
            key={contact.id}
          />
        );
      })}
    </div>
  );
};

export default ContactList;
