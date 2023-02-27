import React, { useEffect, useState } from "react";
import "./styles.css";
import { AiOutlineClose } from "react-icons/ai";

const InformationForm = ({
  productName,
  setProductName,
  type,
  setType,
  selectedImages,
  setSelectedImages,
  desc,
  setDesc,
  errName,
  typeErr,
  descErr,
}) => {
  // const [productName, setProductName] = useState("");
  // const [type, setType] = useState("");
  // const [imageURLs, setImageURLs] = useState([]);
  // const [weight, setWeight] = useState("");
  // const [qty, setQty] = useState(0);
  // const [packaging, setPackaging] = useState(0);
  // const [selectedImages, setSelectedImages] = useState([]);

  // const onSelectFile = (event) => {
  //   const selectedFiles = event.target.files;
  //   const selectedFilesArray = Array.from(selectedFiles);
  //   const imagesArray = selectedFilesArray.map((file) => {
  //     return {
  //       url: URL.createObjectURL(file),
  //       position: selectedImages.length,
  //       file: file,
  //     };
  //   });
  //   setSelectedImages((previousImages) => previousImages.concat(imagesArray));
  // };

  React.useEffect(() => {
    console.log(selectedImages);
  });

  return (
    <>
      <div className="container pt-3">
        <h4 className="bread_crumbs">Information</h4>
        <div className="row pt-3">
          <div className="col-md-6">
            <form className="row g-2">
              <label className="labels">Product Name:</label>
              <input
                type="text"
                placeholder="Enter Product Name"
                value={productName}
                onChange={(e) => setProductName(e.target.value)}
                className="product_field form-control"
                name="product"
              />
              {Object.keys(errName).map((key, index) => {
                return (
                  <div key={index} style={{ color: "red" }}>
                    {errName[key]}
                  </div>
                );
              })}
              <label className="labels">Product Description:</label>

              <textarea
                rows="5"
                placeholder="Enter Product Description Here"
                className="form-control"
                value={desc}
                onChange={(e) => setDesc(e.target.value)}
              ></textarea>
              {Object.keys(descErr).map((key, index) => {
                return (
                  <div key={index} style={{ color: "red" }}>
                    {descErr[key]}
                  </div>
                );
              })}

              <div className="col-md-12">
                <label className="labels">Product Type:</label>
                <select
                  className="form-select"
                  value={type}
                  onChange={(e) => setType(e.target.value)}
                >
                  <option className="form-control">Tablets</option>
                  <option className="form-control">Tubes</option>
                  <option className="form-control">Syrups</option>
                </select>
                {Object.keys(typeErr).map((key, index) => {
                  return (
                    <div key={index} style={{ color: "red" }}>
                      {typeErr[key]}
                    </div>
                  );
                })}
              </div>
            </form>
          </div>
          <div className="col-md-6">
            <label className="image_label" for="image-label">
              Add Product Images
            </label>
            <input
              type="file"
              multiple
              accept="image/*"
              onChange={(e) => {
                const file = e.target.files[0];
                setSelectedImages([file, ...selectedImages]);
              }}
              className="form-control multi_selector"
              id="image-label"
              style={{ display: "none" }}
            />

            <div className="row pt-4">
              {selectedImages &&
                selectedImages.map((image, index) => {
                  return (
                    <div key={index} className="image col-4">
                      <div style={{ position: "absolute" }}>
                        <div
                          className="close_img"
                          onClick={() =>
                            setSelectedImages(
                              selectedImages.filter((e) => e !== image)
                            )
                          }
                        >
                          <AiOutlineClose />
                        </div>
                      </div>
                      <img
                        src={URL.createObjectURL(image)}
                        height="200"
                        alt="upload"
                        className="mapImages"
                      />
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InformationForm;
