import React from "react";
import "./style.css";
import { Table } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";

const MyOrders = () => {
  const navigate = useNavigate();
  const { checkoutProduct } = useSelector((state) => state.CartReducer);
  return (
    <>
      <div className="container-fluid">
        <div className="container">
          <h3 className="order_head">My Orders</h3>
          <hr />
          {checkoutProduct.length > 0 ? (
            <>
              <div className="table_wrapper">
                <Table striped bordered hover>
                  <thead>
                    <tr>
                      <th>User</th>
                      <th>OrderId</th>
                      <th>Date</th>
                      <th>Total Product</th>
                      <th>Total Amount</th>
                      <th>Total Discount</th>
                      <th>Status</th>
                      <th>View</th>
                    </tr>
                  </thead>
                  <tbody>
                    {checkoutProduct.map((val, index) => {
                      return (
                        <tr key={index}>
                          <td>{val.userId}</td>
                          <td>{val.orderId}</td>
                          <td>{val.date}</td>
                          <td>{val.totalProducts}</td>
                          <td>{val.totalPrice}</td>
                          <td>{val.totalDiscount}</td>
                          <td
                            className={
                              val.orderStatus === "Delivered"
                                ? "text-success"
                                : "text-danger"
                            }
                          >
                            {val.orderStatus}
                          </td>
                          <td>
                            <button
                              className="btn_view"
                              onClick={() =>
                                navigate(`/order-detail/${val.orderId}`, {
                                  state: {
                                    orderItems: val.orderItems,
                                    totalDiscount: val.totalDiscount,
                                    totalPrice: val.totalPrice,
                                  },
                                })
                              }
                            >
                              view
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </Table>
              </div>
            </>
          ) : (
            <>
              <h4 className="text-danger">
                It seems that you have not placed any order. Please go to Shop
                and place your order...!!!
              </h4>
              <p className="goto_shop" onClick={() => navigate("/shop")}>
                Go to Shop
              </p>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default MyOrders;
