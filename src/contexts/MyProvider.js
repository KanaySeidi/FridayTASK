import axios from "axios";
import React, { useReducer } from "react";
import { toast } from "react-toastify";
import { API } from "../helpers/const";

export const MainContext = React.createContext();

const INIT_STATE = {
  contacts: null,
  contactToEdit: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "GET_CONTACTS":
      return { ...state, contacts: action.payload };
    case "GET_PRODUCT_TO_EDIT":
      return { ...state, contactToEdit: action.payload };
    default:
      return state;
  }
};

const MyProvaider = (props) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);
  const addContact = async (newContact) => {
    try {
      await axios.post(API, newContact);
      getContacts();
      toast.success("Вы добавили еще одного раба ;-)");
    } catch (error) {
      console.log(error);
    }
  };

  const getContacts = async () => {
    try {
      const response = await axios(API);
      let action = {
        type: "GET_CONTACTS",
        payload: response.data,
      };
      dispatch(action);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteContact = async (id) => {
    try {
      await axios.delete(`${API}/${id}`);

      getContacts();
      toast.success("Успешно удалено йухууу");
    } catch (error) {
      console.log(error);
      toast.error("Ой, что то пошло не по плану");
    }
  };

  const getProductToEdit = async (id) => {
    try {
      const response = await axios(`${API}/${id}`);
      let action = {
        type: "GET_PRODUCT_TO_EDIT",
        payload: response.data,
      };
      dispatch(action);
    } catch (error) {
      console.log(error);
    }
  };

  const saveEditedContact = async (editedContact) => {
    try {
      await axios.patch(`${API}/${editedContact.id}`, editedContact);
      getContacts();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <MainContext.Provider
      value={{
        addContact,
        getContacts,
        deleteContact,
        getProductToEdit,
        saveEditedContact,
        contacts: state.contacts,
        contactToEdit: state.contactToEdit,
      }}
    >
      {props.children}
    </MainContext.Provider>
  );
};
export default MyProvaider;
