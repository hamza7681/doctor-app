import React, { useState } from "react";
import { Table } from "react-bootstrap";
import { AiOutlineClose } from "react-icons/ai";

const ShippingTable = ({ shipping, details, setDetails }) => {
  // const [details, setDetails] = useState([
  //   {
  //     countryCode: "",
  //     stateCode: "",
  //     zipCode: "",
  //     lineCost: "",
  //     productCost: "",
  //   },
  // ]);
  const [showAdd, setShowAdd] = useState(false);

  const addDetails = () => {
    let detailObj = {};
    detailObj["countryCode"] = "";
    detailObj["stateCode"] = "";
    detailObj["zipCode"] = "";
    detailObj["lineCost"] = "";
    detailObj["productCost"] = "";
    setDetails((oldValues) => [...oldValues, detailObj]);
    console.log(details);
  };

  let newDetails = "";
  const handleNewInput = (e, index) => {
    setShowAdd(true);
    newDetails = details;
    newDetails[index][e.target.name] = e.target.value;
    console.log(newDetails);
  };

  const handleDetailSubmit = () => {
    setDetails(newDetails);
    console.log(details);
  };

  return (
    <>
      {shipping === "Paid" ? (
        <>
          <h4 className="labels">Paid for Specific Regions</h4>
          <div className='table_wrapper'>
          <Table className="main_table1" bordered responsive="md" striped>
            <thead>
              <tr>
                <th>Country Code</th>
                <th>State Code</th>
                <th>Zip Code</th>
                <th>Line Cost</th>
                <th>Product Cost</th>
                <th>Del</th>
              </tr>
            </thead>
            <tbody>
              {details.map((val, index) => {
                return (
                  <tr key={index}>
                    <td>
                      <input
                        type="number"
                        className="form-control"
                        name="countryCode"
                        onChange={(e) => handleNewInput(e, index)}
                        value={val.countryCode}
                      />
                    </td>
                    <td>
                      <input
                        type="number"
                        className="form-control"
                        name="stateCode"
                        onChange={(e) => handleNewInput(e, index)}
                        value={val.stateCode}
                      />
                    </td>
                    <td>
                      <input
                        type="number"
                        className="form-control"
                        name="zipCode"
                        onChange={(e) => handleNewInput(e, index)}
                        value={val.zipCode}
                      />
                    </td>
                    <td>
                      <input
                        type="number"
                        className="form-control"
                        name="lineCost"
                        onChange={(e) => handleNewInput(e, index)}
                        value={val.lineCost}
                      />
                    </td>
                    <td>
                      <input
                        type="number"
                        name="productCost"
                        className="form-control"
                        onChange={(e) => handleNewInput(e, index)}
                        value={val.productCost}
                      />
                    </td>
                    <td>
                        <div
                          className="del_row"
                          onClick={(e) =>
                            setDetails(details.filter((e) => e !== val))
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
            <span className="add_more" onClick={addDetails}>
              Add More
            </span>
            {showAdd ? (
              <span className="add_more" onClick={handleDetailSubmit}>
                Save
              </span>
            ) : (
              ""
            )}
            <hr className="mt-4 mb-4" />
          </div>
        </>
      ) : (
        ""
      )}
      {shipping === "FreeRegions" ? (
        <>
          <h4 className="labels">Free for Specific Regions</h4>
          <div className="table_wrapper">
          <Table bordered responsive="md" striped className="main_table1">
            <thead>
              <tr>
                <th>Country Code</th>
                <th>State Code</th>
                <th>Zip Code</th>
                <th>Line Cost</th>
                <th>Product Cost</th>
                <th>Del</th>
              </tr>
            </thead>
            <tbody>
              {details.map((val, index) => {
                return (
                  <tr>
                    <td>
                      <input
                        type="number"
                        className="form-control"
                        name="countryCode"
                        onChange={(e) => handleNewInput(e, index)}
                        value={val.countryCode}
                      />
                    </td>
                    <td>
                      <input
                        type="number"
                        className="form-control"
                        name="stateCode"
                        onChange={(e) => handleNewInput(e, index)}
                        value={val.stateCode}
                      />
                    </td>
                    <td>
                      <input
                        type="number"
                        className="form-control"
                        name="zipCode"
                        onChange={(e) => handleNewInput(e, index)}
                        value={val.zipCode}
                      />
                    </td>
                    <td>
                      <input
                        type="number"
                        className="form-control"
                        name="lineCost"
                        onChange={(e) => handleNewInput(e, index)}
                        value={val.lineCost}
                      />
                    </td>
                    <td>
                      <input
                        type="number"
                        name="productCost"
                        className="form-control"
                        value={val.productCost}
                        onChange={(e) => handleNewInput(e, index)}
                      />
                    </td>
                    <td>
                        <div
                          className="del_row"
                          onClick={(e) =>
                            setDetails(details.filter((e) => e !== val))
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
            <span className="add_more" onClick={addDetails}>
              Add More
            </span>
            {showAdd ? (
              <span className="add_more" onClick={handleDetailSubmit}>
                Save
              </span>
            ) : (
              ""
            )}
            <hr className="mt-4 mb-4" />
          </div>
        </>
      ) : (
        ""
      )}
    </>
  );
};

export default ShippingTable;
