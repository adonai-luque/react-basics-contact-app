import user from "../images/user.png";

const ContactCard = ({ contact, erasedContactIdHandler }) => {
  const { id, name, email } = contact;
  return (
    <div className="item" style={{ display: "flex", alignItems: "center" }}>
      <img src={user} alt="User avatar" className="ui avatar image" />
      <div className="content">
        <div className="header">{name}</div>
        <div className="email">{email}</div>
      </div>
      <i
        className="trash alternate outline icon right aligned"
        style={{ color: "red", marginLeft: "auto" }}
        onClick={() => erasedContactIdHandler(id)}
      />
    </div>
  );
};

export default ContactCard;
