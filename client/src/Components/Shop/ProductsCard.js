import React, { useEffect, useState } from "react";
import { Card } from "antd";
import "./style.css";
import ReactPaginate from "react-paginate";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { http } from "../../axios";

const ProductsCard = () => {
  const [productsList, setProductsList] = useState([]);

  useEffect(async () => {
    await http
      .get("/getallproducts")
      .then((res) => {
        setProductsList(res.data.products);
      })
      .catch((e) => console.log(e));
  }, []);

  const { productIds, products } = useSelector((state) => state.CartReducer);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [page, setPage] = useState(0);
  const cardsPerPage = 6;
  const cardsVisited = page * cardsPerPage;
  const totalPages = Math.ceil(productsList.length / cardsPerPage);
  const displayCards = productsList
    .slice(cardsVisited, cardsVisited + cardsPerPage)
    .map((val, index) => {
      return (
        <div className="col-md-4" key={index}>
          <Card
            className="med_card1"
            hoverable
            cover={
              <img
                alt="example"
                className="med_img"
                src={val.images[0].image}
              />
            }
          >
            <h3>{val.product_name}</h3>
            <p>{val.variations[0].price}</p>
            <p>{val.discountPrice}</p>
            <button
              className="more_btn"
              onClick={() => {
                navigate(`/product/${val.product_name}/${val.id}`);
               
              }}
            >
              More
            </button>
            <button
              className="add_btn"
              onClick={() => {
                dispatch({
                  type: "ADD_TO_CART",
                  payload: {
                    product: {
                      product_id: val.id,
                      imgsrc:
                        val.images[0].image,
                      title: val.product_name,
                      price: Number(val.variations[0].price),
                      discount: 0,
                      quantity: val.variations[0].quantity,
                    },
                    quantity: val.variations[0].quantity,
                  },
                });
              }}
            >
              {productIds.includes(index, 0)
                ? "Remove from cart"
                : "Add to cart"}
            </button>
          </Card>
          <br />
        </div>
      );
    });

  const changePage = ({ selected }) => {
    setPage(selected);
  };
  // console.log(products)
  return (
    <>
      <div className="row">{displayCards}</div>
      <ReactPaginate
        previousLabel={"Previous"}
        nextLabel={"Next"}
        pageCount={totalPages}
        onPageChange={changePage}
        containerClassName={"navigationButtons"}
        previousLinkClassName={"previousButton"}
        nextLinkClassName={"nextButton"}
        disabledClassName={"navigationDisabled"}
        activeClassName={"navigationActive"}
      />
    </>
  );
};

export default ProductsCard;
