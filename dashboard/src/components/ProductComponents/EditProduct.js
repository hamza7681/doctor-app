import React from "react";
import "./styles.css";
import AddImages from "./AddImages";

const EditProduct = () => {
  return (
    <>
      <div className="container mt-5">
        <form className="form-group">
          <label for="medicine" className="label">
            Medicine Formula:
          </label>
          <input
            className="form-control"
            id="medicine"
            type="text"
            placeholder="Write new medicine formula"
          />
          <br />
          <label for="products" className="label">
            Products Sold:
          </label>
          <input
            className="form-control"
            id="products"
            type="number"
            placeholder="Write new number of products sold"
          />
          <br />
          <br />
          <AddImages className="edit_images" />
          <button className="edit__button">Edit</button>
        </form>
      </div>
    </>
  );
};

export default EditProduct;
