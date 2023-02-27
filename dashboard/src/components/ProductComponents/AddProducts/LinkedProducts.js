import React, { useEffect, useState } from "react";
import "./styles.css";
import { Select } from "antd";
import "antd/dist/antd.css";
import { Table } from "react-bootstrap";
import { AiOutlineClose } from "react-icons/ai";

const LinkedProducts = ({
  category,
  setNewArr,
  state,
  setData,
  newArr,
  linkErr,
}) => {
  const { Option } = Select;

  const addCat = (e) => {
    e.preventDefault();
    let obj = {};
    obj["name"] = category;
    obj["productsName"] = state;
    setNewArr((old) => [...old, obj]);
    console.log(newArr);
  };

  const categoryArray = [
    {
      name: "Antibiotics",
      subCategory: [
        "Panadol 500mg",
        "Panadol 250mg",
        "Buscopan 10mg",
        "Buscopan 200mg",
      ],
    },
    {
      name: "Analgesics",
      subCategory: [
        "Codiene 100mg",
        "Fantanyl 50mg",
        "Methdone 200mg",
        "Methodone 100mg",
      ],
    },
  ];

  const categories = categoryArray.map((category) => (
    <Option key={category.name} value={category.name}>
      {category.name}
    </Option>
  ));

  const subCategory = categoryArray
    .find((item) => item.name === category)
    ?.subCategory.map((state) => (
      <Option key={state} value={state}>
        {state}
      </Option>
    ));

  function handlecategoryChange(event) {
    setData(() => ({ state: "", category: event }));
  }

  function handleSubCategory(event) {
    setData((data) => ({ ...data, state: event }));
    // console.log(event);
  }

  return (
    <>
      <div className="container pt-3">
        <h4 className="bread_crumbs">Linked Products</h4>

        <div className=" left_linked_wrapper">
          <form className="row g-2 mt-4">
            <div className="col-6">
              <label className="labels">Select Category:</label>

              <Select
                showSearch
                value={category}
                onChange={handlecategoryChange}
                className="form-select form-select-sm"
                style={{ width: "100%" }}
                placeholder="Search to Select"
                optionFilterProp="children"
                filterOption={(input, option) =>
                  option.children.toLowerCase().indexOf(input.toLowerCase()) >=
                  0
                }
              >
                {categories}
              </Select>
            </div>
            <div className="col-6">
              <label className="labels">Select Product:</label>
              <br />
              <Select
                mode="multiple"
                value={state}
                onChange={handleSubCategory}
                showSearch
                style={{ width: "100%" }}
                placeholder="Search to Select"
                optionFilterProp="children"
                filterOption={(input, option) =>
                  option.children.toLowerCase().indexOf(input.toLowerCase()) >=
                  0
                }
              >
                {subCategory}
              </Select>
            </div>
          </form>
          <button className="add_more1" onClick={addCat}>
            Add
          </button>
        </div>
        <hr className="mt-5 mb-5" />
        <h4 className="labels">Linked Products List</h4>
        <div className="table_wrapper">
          <Table bordered striped className="main_table">
            <thead>
              <tr>
                <th>Category</th>
                <th>Products</th>
                <th>Del</th>
              </tr>
            </thead>
            <tbody>
              {newArr.map((val, index) => {
                return (
                  <>
                    <tr key={index}>
                      <td>{val.name}</td>
                      <td>{val.productsName.join(", ")}</td>
                      <td>
                        <div
                          className="del_row"
                          onClick={(e) =>
                            setNewArr(newArr.filter((e) => e !== val))
                          }
                        >
                          <AiOutlineClose />
                        </div>
                      </td>
                    </tr>
                  </>
                );
              })}
            </tbody>
          </Table>
        </div>

        {Object.keys(linkErr).map((key, index) => {
          return (
            <div key={index} style={{ color: "red" }}>
              {linkErr[key]}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default LinkedProducts;
