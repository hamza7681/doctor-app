import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import "./style.css";
import { useDispatch, useSelector } from "react-redux";
import { http } from "../../../axios/index";

const ProductDetail = () => {
  const { id, title } = useParams();
  const dispatch = useDispatch();
  const { product } = useSelector((state) => state.ProductReducer);
  // useEffect(() => {
  //   dispatch({ type: "PRODUCT", id });
  // }, [id]);

  const [proDetail, setProDetail] = useState(null);
  const [quantity, setQuantity] = useState(1);

  useEffect(async () => {
    await http
      .get(`/getproductbyid/${id}`)
      .then((res) => {
        console.log(res.data.product);
        setProDetail(res.data.product);
      })
      .catch((e) => console.log(e));
  }, []);

  // console.log(proDetail[0].variations[0].price)
  // console.log(proDetail[0].variations[0].quantity);

  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  return (
    <>
      <div className="container">
        <h3 className="pro_head">Product Detail</h3>
        <div className="pro_underline"></div>
        {proDetail != null ? (
          <div className="row">
            <div className="col-md-7 text-center">
              <div className="pro_div">
                <img
                  src={proDetail[0].images[0].image}
                  alt="ProductImg"
                  className="pro_img1"
                />
              </div>
            </div>
            <div className="col-md-5">
              <h2 className="pro_heading">{title}</h2>
              <span className="pro_label">Price:</span>
              <span className="pro_price">
                {Number(proDetail[0].variations[0].price)}
              </span>
              <br />
              <span className="pro_label">Discount Price:</span>
              <span className="pro_price">0</span>
              <br />
              <span className="pro_label">Quantity:</span>
              <button className="dec_btn" onClick={decrement}>
                <span className="operator">-</span>
              </button>
              <span className="counting"> {quantity}</span>
              <button
                className="inc_btn"
                onClick={() => setQuantity(quantity + 1)}
              >
                <span className="operator">+</span>
              </button>
              <br />
              <br />
              <button
                className="pro_cart_btn"
                onClick={() =>
                  dispatch({
                    type: "ADD_TO_CART",
                    payload: {
                      product: {
                        product_id: id,
                        title:title,
                        imgsrc:proDetail[0].images[0].image,
                        price:Number(proDetail[0].variations[0].price),
                        discount:0,
                        quantity:quantity
                      },
                      quantity,
                    },
                  })
                }
              >
                Add to Cart
              </button>
              <div className="mt-4 ">
                <span className="pro_desc">Description:</span>
                <p className="pro_para">{proDetail[0].product_description}</p>
              </div>
            </div>
          </div>
        ) : (
          <h2>Loading...</h2>
        )}
      </div>
    </>
  );
};

export default ProductDetail;
