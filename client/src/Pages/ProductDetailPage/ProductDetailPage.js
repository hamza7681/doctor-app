import React from "react";
import Navbar from "../Main/Navbar";
import Footer from "../Main/Footer";
import ProductDetail from "../../Components/Shop/ProductDetails/ProductDetail";

const ProductDetailPage = () => {
  return (
    <>
      <Navbar />
      <ProductDetail />
      <Footer />
    </>
  );
};

export default ProductDetailPage;
