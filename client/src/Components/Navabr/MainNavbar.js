import React, { useEffect } from "react";
import { Navbar, Container } from "react-bootstrap";
import logo1 from "../../Assets/logo1.png";
import "./styles.css";
import DropdownComp from "./DropdownComp";
import { useNavigate, Link } from "react-router-dom";
import { BsCart4 } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import ProfileDropdown from "./ProfileDropDown";
import proPic from "../../Assets/z.png";

function MainNavbar() {
  const navigate = useNavigate();
  const { token } = useSelector((state) => state.AuthReducer);
  const {products} = useSelector((state) => state.CartReducer);
  const btnRegLogin = () => {
    navigate("/login");
  };
  const dispatch = useDispatch();
  useEffect(() => {
    let localCart = localStorage.getItem("cart");
    if(localCart != 'null' && localCart != null){
      let finalCart = JSON.parse(localCart);
      dispatch({ type: "GET_LOCAL", payload: { cart: finalCart } });
    }
  },[]);
  return (
    <>
      <div className="container-fluid main_navbar">
        <Navbar expand="lg">
          <Container>
            <Navbar.Brand
              onClick={() => {
                navigate("/");
              }}
            >
              <img src={logo1} alt="care" className="logo" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <div className="nav">
                <ul className="nav_list">
                  <li>
                    <DropdownComp />
                  </li>
                  <li>
                    <Link className="router_link" to="/shop">
                      Shop
                    </Link>
                  </li>
                  <li>
                    <Link className="router_link" to="/doctor-consultations">
                      Doctor Consultations
                    </Link>
                  </li>
                  <li>
                    <Link className="router_link" to="/about">
                      About Us
                    </Link>
                  </li>
                  <li>
                    {token ? (
                      <>
                        <div className="avatar_pic">
                          <img src={proPic} className="pro_img" alt="HM" />
                        </div>
                        <ProfileDropdown />
                      </>
                    ) : (
                      <button className="btn_reglog" onClick={btnRegLogin}>
                        Login / Register
                      </button>
                    )}
                  </li>
                  {token ? (
                    <li>
                      <span className="cart" onClick={() => navigate("/cart")}>
                        <BsCart4 className="cart_icon" />
                        <span className="badge_counter">
                          <span className="count">{products.length}</span>
                        </span>
                      </span>
                    </li>
                  ) : (
                    ""
                  )}
                </ul>
              </div>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </>
  );
}

export default MainNavbar;
