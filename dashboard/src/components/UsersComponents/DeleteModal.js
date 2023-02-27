import React from "react";
import { Modal, Button } from "react-bootstrap";

const DeleteModal = (props) => {
  return (
    <>
      <Modal
        {...props}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title
            style={{ color: "#dc3545" }}
            id="contained-modal-title-vcenter"
          >
            Delete Confirmation
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h6>Do you want to delete data?</h6>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide} variant="danger">
            Delete
          </Button>
          <Button onClick={props.onHide} variant="success">
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default DeleteModal;
