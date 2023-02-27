import React from "react";
import Navbar from "../Main/Navbar";
import Footer from "../Main/Footer";
import TopPics from "../../Components/Shop/TopPics";
import ProductLayout from "../../Components/Shop/ProductLayout";

const ShopPage = () => {
  return (
    <>
      <Navbar />
      <TopPics/>
      <ProductLayout/>
      <Footer />
    </>
  );
};

export default ShopPage;
