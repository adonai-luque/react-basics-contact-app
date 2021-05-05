import { useState } from "react";

const AddContact = (props) => {
  const add = (e) => {
    e.preventDefault();
    if (contact.name === "" || contact.name === "") {
      alert("All the fields are required");
      return;
    }
    props.addContactHandler(contact);
    setContact({ name: "", email: "" });
  }
  const [contact, setContact] = useState({ name: "", email: "" })
  return (
    <div className="ui main">
      <h2>Add Contact</h2>
      <form className="ui form" onSubmit={add}>
        <div className="field">
          <label>Name</label>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={contact.name}
            onChange={(e) => setContact({ name: e.target.value, email: contact.email })}
          />
        </div>
        <div className="field">
          <label>Email</label>
          <input
            type="text"
            name="email"
            placeholder="Email"
            value={contact.email}
            onChange={(e) => setContact({ name: contact.name, email: e.target.value })}
          />
        </div>
        <button className="ui button blue">Add</button>
      </form>
    </div>
  );
}
// class AddContact extends React.Component {
//   state = {
//     name: "",
//     email: "",
//   };
//   add = (e) => {
//     e.preventDefault();
//     if (this.state.name === "" || this.state.name === "") {
//       alert("All the fields are required");
//       return;
//     }
//     this.props.addContactHandler(this.state);
//     this.setState({ name: "", email: "" });
//   };
//   render() {
//     return (
//       <div className="ui main">
//         <h2>Add Contact</h2>
//         <form className="ui form" onSubmit={this.add}>
//           <div className="field">
//             <label>Name</label>
//             <input
//               type="text"
//               name="name"
//               placeholder="Name"
//               value={this.state.name}
//               onChange={(e) => this.setState({ name: e.target.value })}
//             />
//           </div>
//           <div className="field">
//             <label>Email</label>
//             <input
//               type="text"
//               name="email"
//               placeholder="Email"
//               value={this.state.email}
//               onChange={(e) => this.setState({ email: e.target.value })}
//             />
//           </div>
//           <button className="ui button blue">Add</button>
//         </form>
//       </div>
//     );
//   }
// }

export default AddContact;
