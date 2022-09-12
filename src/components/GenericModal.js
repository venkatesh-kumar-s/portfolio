import { CircularProgress, Tooltip } from "@mui/material";
import ModeIcon from "@mui/icons-material/Mode";
import React from "react";
import {
  Button,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from "react-bootstrap";

const GenericModal = ({
  state = true,
  setState,
  toggle,
  handleUpdate,
  id,
  loading,
}) => {
  return (
    <>
      <Tooltip title="Modify">
        <button onClick={toggle} className="btn my-auto p-0 text-success">
          {!loading ? (
            <ModeIcon />
          ) : (
            <CircularProgress color="success" size={18} />
          )}
        </button>
      </Tooltip>
      <Modal isOpen={state} toggle={toggle} centered>
        <ModalHeader toggle={toggle}>Modal title</ModalHeader>
        <ModalBody></ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>
            Cancel
          </Button>{" "}
          <Button color="secondary" onClick={toggle}>
            Update
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
};

export default GenericModal;
