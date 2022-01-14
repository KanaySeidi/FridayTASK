import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Counter from "./components/Counter";
import Receipts from "./meals/Receipts";
import FormMail from "./forms/FormMail";
import MyNavbar from "./components/MyNavbar";
import ReadContactPage from "./pages/ReadContactPage";
import EditContactPage from "./pages/EditContactPage";
import AddContactPage from "./pages/AddContactPage";

const MyRoutes = () => {
  return (
    <BrowserRouter>
      <MyNavbar />
      <Routes>
        <Route path="/counter" element={<Counter />} />
        <Route path="/recipes" element={<Receipts />} />
        <Route path="/mail" element={<FormMail />} />
        <Route path="/contacts" element={<ReadContactPage />} />
        <Route path="/contacts/add" element={<AddContactPage />} />
        <Route path="/contact/edit/:id" element={<EditContactPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default MyRoutes;
