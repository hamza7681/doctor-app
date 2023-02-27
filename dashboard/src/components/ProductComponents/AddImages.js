import React, { Component } from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";

export default class AddImages extends Component {
  fileObj = [];
  fileArray = [];

  constructor(props) {
    super(props);
    this.state = {
      file: [null],
    };
    this.uploadMultipleFiles = this.uploadMultipleFiles.bind(this);
    this.uploadFiles = this.uploadFiles.bind(this);
  }

  uploadMultipleFiles(e) {
    this.fileObj.push(e.target.files);
    for (let i = 0; i < this.fileObj[0].length; i++) {
      this.fileArray.push(URL.createObjectURL(this.fileObj[0][i]));
    }
    this.setState({ file: this.fileArray });
  }

  uploadFiles(e) {
    e.preventDefault();
    console.log(this.state.file);
  }

  render() {
    return (
      <form>
        <span className="multi-preview">
          {(this.fileArray || []).map((url) => (
            <img
              src={url}
              alt="..."
              style={{
                width: "100px",
                height: "100px",
                display: "inline-block",
                marginRight: "10px",
                borderRadius: "7px",
                position:'relative',
                top:'-30px'

              }}
            />
          ))}
        </span>

        <span className="form-group mt-4" style={{display:'inline-block'}}>
          <span>
            <input
              type="file"
              className="form-control"
              onChange={this.uploadMultipleFiles}
              multiple
              hidden
              id="image-upload"
            />
          </span>
          <div
            className="text-center pt-1"
            style={{
              width: "120px",
              height: "100px",
              borderWidth: "2px",
              borderColor: "#038c73",
              borderStyle: "solid",
              borderRadius: "7px",
            }}
          >
            <label for="image-upload" style={{ cursor: "pointer" }}>
              <span
                style={{
                  color: "#038c73",
                  fontSize: "36px",
                  position: "relative",
                  left: "40px",
                }}
              >
                <AiOutlinePlusCircle />
              </span>
              <p style={{ color: "#038c73", fontWeight: "bold" }}>
                Add New Images
              </p>
            </label>
          </div>
        </span>
        <button
          type="button"
          className="btn btn-danger btn-block"
          onClick={this.uploadFiles}
          style={{display:'none'}}
        >
          Upload
        </button>
      </form>
    );
  }
}
