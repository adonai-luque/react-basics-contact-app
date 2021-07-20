import user from "../images/user.png";
import { Link } from "react-router-dom";

export default function ContactCard({
  contact,
  removeContactHandler,
  ...props
}) {
  return (
    <div className="ui item center">
      <img src={user} alt="User avatar" className="ui avatar image" />
      <div className="content">
        <Link
          to={{
            pathname: `/contacts/${contact.id}`,
            state: { contact: contact },
          }}
        >
          <div className="header">{contact.name}</div>
          <div>{contact.email}</div>
        </Link>
      </div>
      <i
        className="trash alternate outline icon red"
        style={{ marginTop: "8px" }}
        onClick={removeContactHandler}
      ></i>
      <Link
        to={{
          pathname: "/edit",
          state: { contact: contact },
        }}
      >
        <i
          className="edit alternate outline icon blue"
          style={{ marginTop: "8px", marginRight: "4px" }}
        ></i>
      </Link>
    </div>
  );
}
