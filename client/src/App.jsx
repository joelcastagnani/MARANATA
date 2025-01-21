import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Navbar from "./components/navbar/Navbar.jsx";
import HomePage from "./components/homepage/HomePage.jsx";
import Formulario from "./components/form/Formulario.jsx";
import Title from "./components/titulo/Title.jsx";
import OrdersList from "./components/ordersList/OrdersList.jsx";

const App = () => {
  return (
    <Router>
      <Title />
      <Navbar />
      <ToastContainer position="top-right" autoClose={3000} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/formulario" element={<Formulario />} />
        <Route path="/pedidos" element={<OrdersList />} />
      </Routes>
    </Router>
  );
};

export default App;