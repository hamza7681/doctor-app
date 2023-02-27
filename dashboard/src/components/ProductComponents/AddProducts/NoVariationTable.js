import React from "react";
import { Table } from "react-bootstrap";
import { AiOutlineClose } from "react-icons/ai";
import './styles.css'

const NoVariationTable = ({ProductArray,setProduct}) => {

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

  return (
    <>
      <div className="table_wrapper">
        <Table bordered striped className="main_table">
          <thead>
            <tr>
            
              <th>Quantity</th>
              <th>Status</th>
              <th>Alert At</th>
              <th>Dosage</th>
              <th>Price ($)</th>
              <th>Packaging</th>
           
            </tr>
          </thead>
          <tbody>
            {ProductArray.map((val, index) => {
              return (
                <tr key={index}>
                 
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
                  
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    </>
  );
};

export default NoVariationTable;
