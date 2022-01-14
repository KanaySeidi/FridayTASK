import React, { useEffect } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { MainContext } from "../contexts/MyProvider";
import DeleteIcon from "../images/delete.png";
import EditIcon from "../images/edit.png";

const ReadContactPage = () => {
  const value = React.useContext(MainContext);
  useEffect(() => {
    value.getContacts();
  }, []);

  if (!value.contacts) {
    return <h2>Loading ... </h2>;
  }

  return (
    <div>
      <h2>Home Page</h2>
      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Surname</th>
            <th>Phone Number</th>
            <th>Delete</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
          {value.contacts.map((item, index) => (
            <tr key={item.id}>
              <td>{index + 1}</td>
              <td>{item.name}</td>
              <td>{item.surname}</td>
              <td>{item.phoneNumber}</td>
              <td>
                <Button onClick={() => value.deleteContact(item.id)}>
                  <img width={25} src={DeleteIcon} alt="delete_icon" />
                </Button>
              </td>
              <td>
                <Link to={`/edit/${item.id}`}>
                  <img width={25} src={EditIcon} alt="edit_icon" />
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <ToastContainer />
    </div>
  );
};

export default ReadContactPage;
