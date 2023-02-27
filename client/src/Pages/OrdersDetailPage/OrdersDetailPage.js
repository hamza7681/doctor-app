import React from "react";
import OrderDetail from "../../Components/OrdersDetail/OrderDetail";
import Navbar from "../Main/Navbar";
import Footer from "../Main/Footer";

const OrdersDetailPage = () => {
  return (
    <>
      <Navbar />
      <OrderDetail />
      <Footer />
    </>
  );
};

export default OrdersDetailPage;
