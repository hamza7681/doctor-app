import React from "react";
import "./styles.css";

const EditUser = () => {
  return (
    <>
      <div className="container mt-5">
        <form className="form-group">
          <label for="subscription" className="label">
            Subscription Type:
          </label>
          <select className="form-control" id="subscription">
            <option value="monthly">Monthly</option>
            <option value="quaterly">Quaterly</option>
            <option value="annually">Annually</option>
          </select>
          <br />
          <label for="email" className="label">
            Email Address:
          </label>
          <input
            className="form-control"
            type="email"
            placeholder="Wrtie your new email address"
            id="email"
          />
          <br />
          <label for="contact" className="label">
            Contact Number:
          </label>
          <input
            className="form-control"
            type="number"
            placeholder="Wrtie your new contact number"
            id="contact"
          />
          <br />
          <label for="shipping-address" className="label">
            Shipping Address:
          </label>
          <textarea
            className="form-control"
            id="shipping-address"
            type="text"
            placeholder="Write your new shipping address"
            rows="5"
          ></textarea>
          <button className="edit__button">Edit</button>
        </form>
      </div>
    </>
  );
};

export default EditUser;
