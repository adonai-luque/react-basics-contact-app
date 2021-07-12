import user from "../images/user.png"

export default function ContactCard(props) {
  return (
    <div className="ui item center">
      <img src={user} alt="User avatar" className="ui avatar image" />
      <div className="content">
        <div className="header">{props.contact.name}</div>
        <div>{props.contact.email}</div>
      </div>
      <i className="trash alternate outline icon red" style={{marginTop: "8px"}} onClick={props.removeContactHandler}></i>
    </div>
  );
}
