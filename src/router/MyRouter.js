import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "../pages/LoginPage/LoginPage";
import RegisterPage from "../pages/RegisterPage/RegisterPage";
import HomePage from "../pages/HomePage/HomePage";
import CreateOrderButtonPage from "../pages/createOrderButtonPage/createOrderButtonPage";
import CreateOrderPage from "../pages/createOrderPage/createOrderPage";

export default function MyRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />
        <Route path="home" element={<HomePage />}>
          <Route index element={<CreateOrderButtonPage />} />
          <Route path="create-order" element={<CreateOrderPage />} />
        </Route>
      </Routes>
    </Router>
  );
}
