import React from "react";
import "./style.css";
import whatsapp from "../../Assets/whatsapp.png";
import emailpic from "../../Assets/email.png";
import { useLocation, useParams } from "react-router";
import { useSelector } from "react-redux";

const OrderDetail = () => {
  const { order } = useParams();
  const { state } = useLocation();
  let orderItems = state.orderItems;
  const { shipAdd, billAdd, phone, email } = useSelector(
    (state) => state.ProfileReducer
  );
  return (
    <>
      <div className="container-fluid">
        <div className="container">
          <h3 className="order_detail_head">Order Detail</h3>
          <hr />
          <div className="row">
            <div className="col-md-8 mb-3 order_list_wrapper p-4">
              <div className="mt-2">
                <p className="order_no">
                  ORDER NO. {order}, THE AMOUNT IS {state.totalDiscount}
                </p>
                <p className="order_date">Ordered on 22/02/2022</p>
              </div>
              <hr />

              {orderItems.map((val, index) => {
                return (
                  <div className="row pt-1 pb-1 mb-1 order_list" key={index}>
                    <div className="col-2">
                      <img src={val.imgsrc} alt="f" className="detail_img" />
                    </div>
                    <div className="col-4">
                      <span className="detail_title">{val.title}</span>
                    </div>
                    <div className="col-3 text-center">
                      <span className="detail_priceqty">{val.price}</span>
                    </div>
                    <div className="col-3 text-center">
                      <span className="detail_priceqty">
                        {val.discountPrice}
                      </span>
                    </div>
                  </div>
                );
              })}

              <div className="row mt-5 pt-5 pb-4">
                <div className="col-md-8"></div>
                <div className="col-md-4">
                  <div className="row">
                    <div className="col-6">
                      <p className="calc">In Total</p>
                      <p className="calc">Discount</p>
                      <hr />
                      <p className="calc">Total amount</p>
                    </div>
                    <div className="col-6 amount">
                      <p className="pri">{state.totalPrice}</p>
                      <p className="pri">
                        {state.totalPrice - state.totalDiscount}
                      </p>
                      <hr />
                      <p className="pri">{state.totalDiscount}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-1"></div>
            <div className="col-md-3 mb-3 p-4 shipping_wrapper">
              <div>
                <h5 className="shipping_address">Shipping Address:</h5>
                <p className="shipping_para">
                  {shipAdd}
                </p>
                <hr />
              </div>
              <div>
                <h5 className="shipping_address">Billing Address:</h5>
                <p className="shipping_para">
                  {billAdd}
                </p>
                <hr />
              </div>
              <div>
                <h5 className="shipping_address">Contact:</h5>
                <span>
                  <img src={whatsapp} alt="whatsapp" className="whatsapp" />
                </span>
                <span className="whats_no">{phone}</span>
                <br />
                <span>
                  <img src={emailpic} alt="email" className="email" />
                </span>
                <span className="email_add">{email}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderDetail;
