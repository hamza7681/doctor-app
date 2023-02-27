import React, { useState, useEffect } from "react";
import TabsUnstyled from "@mui/base/TabsUnstyled";
import TabsListUnstyled from "@mui/base/TabsListUnstyled";
import TabPanelUnstyled from "@mui/base/TabPanelUnstyled";
import TabUnstyled from "@mui/base/TabUnstyled";
import InformationForm from "./InformationForm";
import InventoryVariations from "./InventoryVariations";
import LinkedProducts from "./LinkedProducts";
import Shipping from "./Shipping";
import "./styles.css";
import { useLocation, useNavigate } from "react-router-dom";
import { http } from "../../../axios/auth";
import axios from "axios";

const AddProducts = () => {
  const location = useLocation();
  const navigate = useNavigate();
  // Errors Hooks
  // Information Tab Errors
  const [errName, setErrName] = useState({});
  const [typeErr, setTypeErr] = useState({});
  const [descErr, setDescErr] = useState({});

  //  Linked Product Tab Errors
  const [linkErr, setLinkErr] = useState({});

  // Shipping Tab Errors
  const [weighErr, setWeighErr] = useState({});
  const [leErr, setLeErr] = useState({});
  const [widErr, setWidErr] = useState({});
  const [heiErr, setHeiErr] = useState({});
  const [shipErr, setShipErr] = useState({});

  const validation = () => {
    const errName = {};
    const typeErr = {};
    const descErr = {};
    const linkErr = {};
    const weighErr = {};
    const leErr = {};
    const widErr = {};
    const heiErr = {};
    const shipErr = {};

    let isValid = true;
    if (productName === "") {
      errName.emptyProduct = "Please enter product Name";
      isValid = false;
    }

    if (type === "") {
      typeErr.emptyType = "Please select Product Type";
      isValid = false;
    }
    if (desc === "") {
      descErr.emptyDesc = "Please enter the Description of Product";
      isValid = false;
    }

    if (category === "") {
      linkErr.emptyLink = "Please select Linked Products Category";
      isValid = false;
    } else if (state === "") {
      linkErr.emptyLink = "Please select Linked Products";
      isValid = false;
    }
    if (productWeight == 0) {
      weighErr.emptyWeight = "Please enter the weight of Product";
      isValid = false;
    } else if (productWeight < 0) {
      weighErr.emptyWeight = "Please enter valid weight of Product";
      isValid = false;
    }
    if (length == 0) {
      leErr.emptyLength = "Please enter the length of Product";
      isValid = false;
    } else if (length < 0) {
      leErr.emptyLength = "Please enter valid length of Product";
      isValid = false;
    }
    if (width == 0) {
      widErr.emptyWidth = "Please enter the width of Product";
      isValid = false;
    } else if (width < 0) {
      widErr.emptyWidth = "Please enter valid width of Product";
      isValid = false;
    }
    if (height == 0) {
      heiErr.emptyHeight = "Please enter the height of Product";
      isValid = false;
    } else if (height < 0) {
      heiErr.emptyHeight = "Please enter valid height of Product";
      isValid = false;
    }
    if (shipping === "") {
      shipErr.emptyShipping = "Please select type of Shipping";
      isValid = false;
    }
    setErrName(errName);
    setTypeErr(typeErr);
    setDescErr(descErr);
    setLinkErr(linkErr);
    setWeighErr(weighErr);
    setLeErr(leErr);
    setWidErr(widErr);
    setHeiErr(heiErr);
    setShipErr(shipErr);
    return isValid;
  };

  //  Information Form Hooks
  const [productName, setProductName] = useState("");
  const [type, setType] = useState("");
  const [desc, setDesc] = useState("");
  const [selectedImages, setSelectedImages] = useState([]);

  // Inventory Hooks
  const [checked, setChecked] = useState(false);
  const [ProductArray, setProduct] = useState([
    {
      title: "",
      quantity: 0,
      status: "",
      alert_at: 0,
      dosage: "",
      price: "",
      packaging: 0,
    },
  ]);

  // Linked Product Hooks
  const [{ category, state }, setData] = useState({
    category: [],
    state: [],
  });
  const [newArr, setNewArr] = React.useState([]);

  // Shipping Hooks
  const [productWeight, setPweight] = useState(0);
  const [length, setLength] = useState(0);
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const [shipping, setShipping] = useState("");

  // Shipping Table Hook
  const [details, setDetails] = useState([
    {
      countryCode: "",
      stateCode: "",
      zipCode: "",
      lineCost: "",
      productCost: "",
    },
  ]);

  const SubmitProduct = async (e) => {
    e.preventDefault();
    let form = new FormData();
    form.append("product_name", productName);
    form.append("product_description", desc);
    form.append("variation", JSON.stringify(ProductArray));
    for (let x = 0; x < selectedImages.length; x++) {
      form.append("file", selectedImages[x]);
    }

    try {
      const res = await axios.post(
        "https://e-care-api-kountex.herokuapp.com/api/upload",
        form
      );
      console.log(res.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  // const isValid = validation();
  // if (isValid) {
  //   http.post('/upload',{

  //   })
  //   navigate("/products");
  // }

  useEffect(() => {
    // console.log(
    //   location.pathname.substring(location.pathname.lastIndexOf("/") + 1)
    // );
    if (location.pathname.indexOf("edit-product") > -1) {
      setProductName("Panadol");
      setDesc("This is Description of Panadol");
      setType("Syrups");

      setProduct([
        {
          title: "12",
          quantity: "12",
          productStatus: "Out of Stock",
          alertAt: "23",
        },
      ]);

      setNewArr([
        {
          name: "Analgesics",
          productsName: ["Meperidine 300mg", "Oxycodone 200mg"],
        },
      ]);
      setPweight(20);
      setLength(10);
      setWidth(10);
      setHeight(10);
      setShipping("Paid");
      setDetails([
        {
          countryCode: "92",
          stateCode: "311",
          zipCode: "38000",
          lineCost: "300",
          productCost: "10",
        },
      ]);
    }
  }, []);

  const [active, setActive] = useState(0);

  const ActiveClass = (index) => {
    setActive(index);
  };

  return (
    <>
      <TabsUnstyled defaultValue={0}>
        <TabsListUnstyled className="main_tabs">
          <TabUnstyled
            className={`tab_link ${active === 1 ? "activePanel" : ""}`}
            onClick={() => ActiveClass(1)}
          >
            Information
          </TabUnstyled>
          <TabUnstyled
            className={`tab_link ${active === 2 ? "activePanel" : ""}`}
            onClick={() => ActiveClass(2)}
          >
            Inventory & Variations
          </TabUnstyled>
          <TabUnstyled
            className={`tab_link ${active === 3 ? "activePanel" : ""}`}
            onClick={() => ActiveClass(3)}
          >
            Linked Products
          </TabUnstyled>
          <TabUnstyled
            className={`tab_link ${active === 4 ? "activePanel" : ""}`}
            onClick={() => ActiveClass(4)}
          >
            Shipping
          </TabUnstyled>
        </TabsListUnstyled>
        <hr />
        <TabPanelUnstyled value={0}>
          <InformationForm
            productName={productName}
            setProductName={setProductName}
            type={type}
            setType={setType}
            desc={desc}
            setDesc={setDesc}
            errName={errName}
            typeErr={typeErr}
            descErr={descErr}
            selectedImages={selectedImages}
            setSelectedImages={setSelectedImages}
          />
        </TabPanelUnstyled>
        <TabPanelUnstyled value={1}>
          <InventoryVariations
            checked={checked}
            setChecked={setChecked}
            ProductArray={ProductArray}
            setProduct={setProduct}
          />
        </TabPanelUnstyled>
        <TabPanelUnstyled value={2}>
          <LinkedProducts
            category={category}
            state={state}
            setData={setData}
            linkErr={linkErr}
            newArr={newArr}
            setNewArr={setNewArr}
          />
        </TabPanelUnstyled>
        <TabPanelUnstyled value={3}>
          <Shipping
            productWeight={productWeight}
            setPweight={setPweight}
            length={length}
            setLength={setLength}
            width={width}
            setWidth={setWidth}
            height={height}
            setHeight={setHeight}
            shipping={shipping}
            setShipping={setShipping}
            details={details}
            setDetails={setDetails}
            SubmitProduct={SubmitProduct}
            weighErr={weighErr}
            leErr={leErr}
            widErr={widErr}
            heiErr={heiErr}
            shipErr={shipErr}
            linkErr={linkErr}
            descErr={descErr}
            typeErr={typeErr}
            errName={errName}
          />
        </TabPanelUnstyled>
      </TabsUnstyled>
    </>
  );
};

export default AddProducts;
