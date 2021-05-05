import ContactCard from "./ContactCard";

const ContactList = (props) => {
  const erasedContactIdHandler = (id) => {
    props.removeContactHandler(id);
  };

  return (
    <div className="ui celled list">
      {props.contacts.map((contact) => {
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
