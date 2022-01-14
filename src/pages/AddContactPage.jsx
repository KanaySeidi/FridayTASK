import React, { useState } from "react";
import { Button, FormControl } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { MainContext } from "../contexts/MyProvider";

const AddContactPage = () => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const navigate = useNavigate();

  const value = React.useContext(MainContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    const newContact = {
      name,
      surname,
      phoneNumber,
    };
    value.addContact(newContact);
    setName("");
    setSurname("");
    setPhoneNumber("");

    navigate("/");
  };

  return (
    <div className="container edit-add-page">
      <h2>Add Page</h2>
      <form onSubmit={handleSubmit}>
        <FormControl
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="Enter name"
        />
        <FormControl
          onChange={(e) => setSurname(e.target.value)}
          value={surname}
          type="text"
          placeholder="Enter surname"
        />
        <FormControl
          onChange={(e) => setPhoneNumber(e.target.value)}
          value={phoneNumber}
          type="number"
          placeholder="Enter phonenumber"
        />
        <Button type="submit"> Add</Button>
      </form>
    </div>
  );
};

export default AddContactPage;
