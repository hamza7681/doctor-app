import React,{useEffect} from 'react'
import "./App.css";
import Home from "./Pages/Main/Home";
import LoginPage from "./Pages/Login/LoginPage";
import SignUpPage from "./Pages/SignUp/SignUpPage";
import ShopPage from "./Pages/ShopPage/shopPage";
import DoctorConPage from "./Pages/DoctorConsult/DoctorConPage";
import AboutPage from "./Pages/About/AboutPage";
import ProductDetailPage from "./Pages/ProductDetailPage/ProductDetailPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CartPage from "./Pages/CartPage/CartPage";
import ProtectedRoute from "./Routes/ProtectedRoute";
import ProfilePage from "./Pages/ProfilePage/ProfilePage";
import OrdersPage from "./Pages/OrdersPage/OrdersPage";
import OrdersDetailPage from "./Pages/OrdersDetailPage/OrdersDetailPage";
import PrivateRoute from "./Routes/PrivateRoute";

function App() {





  return (
    <div className="App">
      <Router>
        <Routes>
          {/* Routes that shown to all users  */}
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/doctor-consultations" element={<DoctorConPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/product/:title/:id" element={<ProductDetailPage />} />

          {/* Routes that shown when user login  */}
          <Route element={<PrivateRoute />}>
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/orders" element={<OrdersPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/order-detail/:order" element={<OrdersDetailPage />} />
          </Route>

          {/* Routes that shown when user is not login  */}
          <Route element={<ProtectedRoute />}>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignUpPage />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
