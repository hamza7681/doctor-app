import React, { useState } from "react";
import "./style.css";
import ProPic from "../../Assets/z.png";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";

const Profile = () => {
  const { pass } = useSelector((state) => state.AuthReducer);
  const dispatch = useDispatch();
  const [fname, setFname] = useState("Hâmzâ");
  const [lname, setLname] = useState("Mûghål");
  const [username, setUsername] = useState("hamza7681");
  const [email, setEmail] = useState("hamzambf@gmail.com");
  const [shipAdd, setShipAdd] = useState("");
  const [billAdd, setBillAdd] = useState("");
  const [phone, setPhone] = useState("03117110211");
  const [password, setPassword] = useState(pass);
  const [show, setShow] = useState(false);

  const save = (e) => {
    e.preventDefault();
    dispatch({
      type: "SAVE_PROFILE",
      payload: {
        fname,
        lname,
        username,
        email,
        shipAdd,
        billAdd,
        password,
        phone,
      },
    });
  };

  return (
    <>
      <div className="container-fluid">
        <div className="container">
          <h3 className="profile_head">Profile</h3>
          <hr />
          <div className="row mt-5 mb-5">
            <div className="col-md-3 profile_side">
              <div className="text-center">
                <img src={ProPic} alt="HM" className="profile_pic" />
                <h4 className="profile_name">
                  {fname} {lname}
                </h4>
                <h6 className="profile_username">@{username}</h6>
              </div>
            </div>
            <div className="col-md-9">
              <form className="row form-group g-2">
                <div className="col-6">
                  <label className="profile_label">First Name</label>
                  <input
                    type="text"
                    value={fname}
                    className="form-control"
                    onChange={(e) => setFname(e.target.value)}
                  />
                </div>
                <div className="col-6">
                  <label className="profile_label">Last Name</label>
                  <input
                    type="text"
                    value={lname}
                    className="form-control"
                    onChange={(e) => setLname(e.target.value)}
                  />
                </div>
                <div className="col-6">
                  <label className="profile_label">Username</label>
                  <input
                    type="text"
                    value={username}
                    className="form-control"
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>
                <div className="col-6">
                  <label className="profile_label">Contact</label>
                  <input
                    type="number"
                    value={phone}
                    className="form-control"
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
                <div className="col-12">
                  <label className="profile_label">Email</label>
                  <input
                    type="email"
                    value={email}
                    className="form-control"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="col-12">
                  <label className="profile_label">Shipping Address</label>
                  <textarea
                    rows="5"
                    className="form-control"
                    value={shipAdd}
                    onChange={(e) => setShipAdd(e.target.value)}
                  ></textarea>
                </div>
                <div className="col-12">
                  <label className="profile_label">Billing Address</label>
                  <textarea
                    rows="5"
                    className="form-control"
                    value={billAdd}
                    onChange={(e) => setBillAdd(e.target.value)}
                  ></textarea>
                  <input type="checkbox" onClick={() => setBillAdd(shipAdd)} />
                  <span className="same">Same as Shipping Address</span>
                </div>
                <div className="col-12">
                  <label className="profile_label">Password</label>
                  <div className="input-group mb-3">
                    <input
                      type={show ? "text" : "password"}
                      value={password}
                      className="form-control"
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <div className="input-group-prepend">
                      <span
                        className="input-group-text showBtn"
                        onClick={() => setShow(!show)}
                      >
                        {show ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="mt-4">
                  <button className="profile_save" onClick={save}>
                    Save
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
