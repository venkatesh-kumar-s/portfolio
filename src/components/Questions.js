import React, { useEffect, useState } from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  CircularProgress,
  Tooltip,
} from "@mui/material";
import { ExpandMore } from "@mui/icons-material";
import { QUESTIONS_LIST } from "../gql/queries";
import Skeleton from "react-loading-skeleton";

// MUI Icons
import DeleteIcon from "@mui/icons-material/Delete";
import { Slide, toast, ToastContainer } from "react-toastify";
import GenericModal from "./GenericModal";

const Questions = ({ admin = false }) => {
  const [state, setState] = useState();
  const [open, setOpen] = useState(true);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  const toggle = () => setOpen(!open);

  return (
    <div style={{ borderRadius: 50 }}>
      {!loading ? (
        data?.questions?.map((r, i) => (
          <Accordion
            key={i}
            sx={{
              borderRadius: 2,
              overflow: "hidden",
              margin: "10px 0",
              color: "whitesmoke",
            }}
            TransitionProps={{ unmountOnExit: true }}
          >
            <AccordionSummary
              expandIcon={<ExpandMore sx={{ color: "whitesmoke" }} />}
              sx={{ backgroundColor: "#0F6E81" }}
            >
              {r?.question}
            </AccordionSummary>
            <AccordionDetails
              sx={{ backgroundColor: "#0F6E8140", color: "black" }}
              className="d-flex justify-content-between"
            >
              <span> {r?.answer}</span>{" "}
              {admin && (
                <div className="d-flex">
                  <GenericModal
                    id={r?.id}
                    handleUpdate={() =>
                      console.log("handle update used to be here")
                    }
                    loading={() =>
                      console.log("handle loading used to be here")
                    }
                    state={open}
                    setState={setOpen}
                    toggle={toggle}
                  />
                  &nbsp;
                  <Tooltip title="Delete">
                    <button
                      //disabled={del_loading === true ? true : false}
                      onClick={() =>
                        console.log("handle delete used to be here")
                      }
                      className="btn my-auto p-0 text-danger"
                    >
                      {/* {!del_loading ? (
                        <DeleteIcon />
                      ) : (
                        <CircularProgress color="error" size={18} />
                      )} */}
                    </button>
                  </Tooltip>
                </div>
              )}
            </AccordionDetails>
          </Accordion>
        ))
      ) : (
        <Skeleton
          count={5}
          baseColor="#33b5e5"
          highlightColor="white"
          height="50px"
          borderRadius={10}
        />
      )}
      <ToastContainer
        position="bottom-center"
        autoClose={2000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        transition={Slide}
        closeButton={false}
      />
    </div>
  );
};

export default Questions;
