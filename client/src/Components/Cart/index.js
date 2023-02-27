import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./style.css";
import { FiDelete } from "react-icons/fi";
import { Table } from "react-bootstrap";

const Cart = () => {
  const { products, totalQuantities, totalPrice, finalDiscPrice } = useSelector(
    (state) => state.CartReducer
  );
  const dispatch = useDispatch();
  return (
    <>
      <div className="cart">
        <div className="container">
          <h3>Your Cart</h3>
          {products.length > 0 ? (
            <>
              <div className="row">
                <div className="col-md-10">
                <div className="table_wrapper1">
                  <Table className="cart_table" striped bordered hover>
                    <thead>
                      <tr>
                        <th>Image</th>
                        <th>Title</th>
                        <th>Price</th>
                        <th>Discount Price</th>
                        <th>Quantity</th>
                        <th>Total Price</th>
                        <th>Remove</th>
                      </tr>
                    </thead>
                    <tbody>
                      {products.map((val, index) => {
                        return (
                          
                          <tr key={index}>
                          
                            <td>
                              <img
                                src={val.imgsrc}
                                alt="image"
                                className="cart_image img-thumbnail"
                              />
                            </td>
                            <td>
                              <p className="final_title">{val.title}</p>
                            </td>
                            <td>
                              <span className="price">{val.price}</span>
                            </td>
                            <td>
                              <span className="price">{val.discountPrice}</span>
                            </td>
                            <td>
                              <button
                                className="dec_btn1"
                                onClick={() =>
                                  dispatch({ type: "DEC", payload: val.product_id })
                                }
                              >
                                <span className="operator">-</span>
                              </button>
                              <span className="counting1"> {val.quantity}</span>
                              <button
                                className="inc_btn1"
                                onClick={() =>
                                  dispatch({ type: "INC", payload: val.product_id })
                                }
                              >
                                <span className="operator">+</span>
                              </button>
                            </td>
                            <td>
                              <span className="total_price">
                                {val.price * val.quantity}
                              </span>
                            </td>
                            <td>
                              <FiDelete
                                className="delete_icon"
                                onClick={() =>
                                  dispatch({ type: "REMOVE", payload: val.product_id })
                                }
                              />
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </Table>
                  </div>
                </div>
                <div className="col-md-2">
                  <h3>Total Items: {products.length}</h3>
                  <h3>Grand Total: {totalPrice}</h3>
                  <button
                    className="checkout_btn"
                    onClick={() => dispatch({ type: "CHECKOUT" })}
                  >
                    Checkout
                  </button>
                </div>
              </div>
            </>
          ) : (
            "Your Cart is Empty...!!!"
          )}
        </div>
      </div>
    </>
  );
};

export default Cart;
