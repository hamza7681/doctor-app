import React from "react";
import Navbar from "../Main/Navbar";
import Footer from "../Main/Footer";
import MyOrders from "../../Components/MyOrders/MyOrders";

const OrdersPage = () => {
  return (
    <>
      <Navbar />
      <MyOrders />
      <Footer />
    </>
  );
};

export default OrdersPage;
