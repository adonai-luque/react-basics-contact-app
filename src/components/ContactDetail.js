import user from "../images/user.jpg";
import { Link } from "react-router-dom";

export default function ContactDetail(props) {
  const { name, email } = props.location.state.contact;
  return (
    <div className="main">
      <div className="ui card centered">
        <div className="image">
          <img src={user} alt="User" />
        </div>
        <div className="content">
          <div className="header">{name}</div>
          <div className="description">{email}</div>
        </div>
      </div>
      <Link to="/">
        <div className="center-div">
          <button className="ui button blue center">
            Back to Contact List
          </button>
        </div>
      </Link>
    </div>
  );
}
