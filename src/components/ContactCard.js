import user from "../images/user.png"

export default function ContactCard({ contact, removeContactHandler, ...props }) {
  return (
    <div className="ui item center">
      <img src={user} alt="User avatar" className="ui avatar image" />
      <div className="content">
        <div className="header">{contact.name}</div>
        <div>{contact.email}</div>
      </div>
      <i className="trash alternate outline icon red" style={{ marginTop: "8px" }} onClick={removeContactHandler}></i>
    </div>
  );
}
