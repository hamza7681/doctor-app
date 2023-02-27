import React, { useState, useEffect } from "react";
import "./styles.css";
import ToggleSwitch from "./ToggleSwitch";
import { Table } from "react-bootstrap";
import { AiOutlineClose } from "react-icons/ai";
import NoVariationTable from "./NoVariationTable";

const InventoryVariations = ({
  checked,
  setChecked,
  ProductArray,
  setProduct,

}) => {
  // const [checked, setChecked] = useState(false);
  // const [showRow, setShowRow] = useState(false);

  const [showAdd, setShowAdd] = useState(false);
  // const [ProductArray, setProduct] = useState([
  //   {
  //     title: "",
  //     quantity: "",
  //     productStatus: "",
  //     alertAt: "",
  //   },
  // ]);

  // const [invenArr, setInvenArr] = useState({
  //   invenQuantity: "",
  //   inventStatus: "",
  //   invenAlert: "",
  // });

  const addProduct = () => {
    // setShowRow(!showRow);
    let obj = {};
    obj["title"] = "";
    obj["quantity"] = 0;
    obj["status"] = "";
    obj["alert_at"] = 0;
    obj["dosage"] = "";
    obj["price"] = "";
    obj["packaging"] = 0;
    // ProductArray.push(obj);
    setProduct((old) => [...old, obj]);
    console.log(ProductArray);

    // setShowRow(false);
  };

  let newVariation = "";
  const handleInputChange = (e, index) => {
    setShowAdd(true);
    newVariation = ProductArray;

    newVariation[index][e.target.name] =
      e.target.name === "quantity" ||
      e.target.name === "alert_at" ||
      e.target.name === "packaging"
        ? Number(e.target.value)
        : e.target.value;
    console.log(newVariation);
    setProduct(newVariation);
  };

  const handleFormSubmit = () => {
    setProduct(newVariation);
    // console.log(ProductArray);
  };

  return (
    <>
      <div className="container pt-3">
        <h4 className="bread_crumbs">Inventory & Variations</h4>
        <ToggleSwitch
          isOn={checked}
          handleToggle={() => setChecked(!checked)}
        />
        <span className="variations font-bold">Product has variations</span>
        <br />
        {checked == true ? (
          <>
            <div className="table_wrapper">
              <Table bordered striped className="main_table">
                <thead>
                  <tr>
                    <th>Title</th>
                    <th>Quantity</th>
                    <th>Status</th>
                    <th>Alert At</th>
                    <th>Dosage</th>
                    <th>Price ($)</th>
                    <th>Packaging</th>
                    <th>Del</th>
                  </tr>
                </thead>
                <tbody>
                  {ProductArray.map((val, index) => {
                    return (
                      <tr key={index}>
                        <td>
                          <input
                            type="text"
                            className="form-control"
                            name="title"
                            onChange={(e) => handleInputChange(e, index)}
                            // value={val.title}
                            placeholder="e.g name"
                          />
                        </td>
                        <td>
                          <input
                            type="number"
                            className="form-control"
                            name="quantity"
                            onChange={(e) => handleInputChange(e, index)}
                            // value={val.quantity}
                            placeholder="e.g 123"
                          />
                        </td>
                        <td>
                          <select
                            className="form-control"
                            name="status"
                            onChange={(e) => handleInputChange(e, index)}
                            // value={val.status}
                          >
                            <option selected>Select</option>
                            <option>In Stock</option>
                            <option>Out of Stock</option>
                          </select>
                        </td>
                        <td>
                          <input
                            type="number"
                            name="alert_at"
                            onChange={(e) => handleInputChange(e, index)}
                            className="form-control"
                            // value={val.alert_at}
                            placeholder="e.g 123"
                          />
                        </td>
                        <td>
                          <input
                            type="text"
                            name="dosage"
                            onChange={(e) => handleInputChange(e, index)}
                            className="form-control"
                            // value={val.dosage}
                            placeholder="e.g 0mg / 0ml"
                          />
                        </td>
                        <td>
                          <input
                            type="text"
                            name="price"
                            onChange={(e) => handleInputChange(e, index)}
                            className="form-control"
                            // value={val.price}
                            placeholder="e.g 123"
                          />
                        </td>
                        <td>
                          <input
                            type="number"
                            name="packaging"
                            onChange={(e) => handleInputChange(e, index)}
                            className="form-control"
                            // value={val.packaging}
                            placeholder="e.g 123"
                          />
                        </td>
                        <td>
                          <div
                            className="del_row"
                            onClick={(e) =>
                              setProduct(ProductArray.filter((e) => e !== val))
                            }
                          >
                            <AiOutlineClose />
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </Table>
            </div>

            <div className="container text-center">
              <span className="add_more" onClick={addProduct}>
                Add More
              </span>
              {showAdd ? (
                <span className="add_more" onClick={handleFormSubmit}>
                  Save
                </span>
              ) : (
                ""
              )}
            </div>
          </>
        ) : (
          <>
            <NoVariationTable
              ProductArray={ProductArray}
              setProduct={setProduct}
            />
          </>
        )}
      </div>
    </>
  );
};

export default InventoryVariations;
