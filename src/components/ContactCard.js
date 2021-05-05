import user from "../images/user.png";

const ContactCard = (props) => {
  return (
    <div className="item" style={{ display: "flex", alignItems: "center" }}>
      <img src={user} alt="User avatar" className="ui avatar image" />
      <div className="content">
        <div className="header">{props.contact.name}</div>
        <div className="email">{props.contact.email}</div>
      </div>
      <i
        className="trash alternate outline icon right aligned"
        style={{ color: "red", marginLeft: "auto" }}
        onClick={() => props.erasedContactIdHandler(props.contact.id)}
      />
    </div>
  );
};

export default ContactCard;
