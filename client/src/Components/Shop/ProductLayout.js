import React from "react";
import ProductsCard from "./ProductsCard";
import SideProduct from "./SideProduct";
import './style.css'

const ProductLayout = () => {
  return (
    <>
      <div className="container-fluid">
      <h3 className="pro_head">Available Products</h3>
      <div className="pro_underline"></div>
        <div className="row">
          <div className="col-md-9">
            <ProductsCard />
          </div>
          <div className="col-md-3">
            <SideProduct />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductLayout;
