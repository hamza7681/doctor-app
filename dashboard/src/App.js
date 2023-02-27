import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Dashboard from "./pages/Dashboard";
import Orders from "./pages/Orders";
import Users from "./pages/Users";
import Products from "./pages/Products";
import { Routes, Route } from "react-router-dom";
import Earnings from "./pages/Earnings";
import EditUserPage from "./pages/EditUserPage";
import AddProductPage from "./pages/AddProductPage";
import LoginPage from "./pages/LoginPage";
import ProtectedRoutes from "./Routes/ProtectedRoutes";
import PublicRoutes from "./Routes/PublicRoutes";

function App() {
  return (
    <>
      <Routes>
        <Route element={<ProtectedRoutes/>}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/users" element={<Users />} />
          <Route path="/products" element={<Products />} />
          <Route path="/earning" element={<Earnings />} />
          <Route path="/edit-user" element={<EditUserPage />} />
          <Route path="/add-product" element={<AddProductPage />} />
          <Route path="/edit-product/:id" element={<AddProductPage />} />
        </Route>
        <Route element={<PublicRoutes />}>
          <Route path="/" element={<LoginPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
