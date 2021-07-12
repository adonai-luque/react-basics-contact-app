import { useState } from "react";

export default function AddContact({ addContactHandler }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  function addNewContact(e) {
    e.preventDefault();
    if (name && email) {
      addContactHandler({name: name, email: email})
      setName("")
      setEmail("")
      return
    }
    alert("Name and Email are required");
  }

  return (
    <div className="ui main">
      <h2>Add Contact</h2>
      <form
        action=""
        className="ui form"
        onSubmit={addNewContact}
      >
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
        <button className="ui button blue">Add</button>
      </form>
    </div>
  );
}
