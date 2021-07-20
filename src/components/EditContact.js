import { useState } from "react";

export default function EditContact({
  updateContactHandler,
  history,
  location,
}) {
  const id = location.state.contact.id
  const [name, setName] = useState(location.state.contact.name);
  const [email, setEmail] = useState(location.state.contact.email);
  
  function updateContact(e) {
    e.preventDefault();
    if (name && email) {
      updateContactHandler({ id: id, name: name, email: email });
      setName("");
      setEmail("");
      history.push("/");
      return;
    }
    alert("Name and Email are required");
  }

  return (
    <div className="ui main">
      <h2>Edit Contact</h2>
      <form action="" className="ui form" onSubmit={updateContact}>
        <div className="field">
          <label>Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="field">
          <label>E-mail</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your e-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button className="ui button blue">Update</button>
      </form>
    </div>
  );
}
