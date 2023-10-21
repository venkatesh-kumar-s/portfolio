import { CircularProgress, TextareaAutosize } from "@mui/material";
import React, { useState } from "react";
import { toast } from "react-toastify";
import Questions from "../../components/Questions";

const Qna = ({ isAdd }) => {
  const [state, setState] = useState();
  const [loading, setLoading] = useState(false);

  return (
    <>
      {isAdd ? (
        <div>
          <TextareaAutosize
            value={state?.question ? state.question : ""}
            aria-label="empty textarea"
            placeholder="Enter Question"
            className="form-control"
            onChange={(e) => setState({ ...state, question: e.target.value })}
          />
          <br />
          <TextareaAutosize
            value={state?.answer ? state.answer : ""}
            aria-label="empty textarea"
            placeholder="Enter Answer"
            className="form-control"
            onChange={(e) => setState({ ...state, answer: e.target.value })}
          />
          <div className="my-4 float-end">
            <button className="btn btn-warning" onClick={() => setState()}>
              Reset
            </button>{" "}
            <button
              disabled={state?.answer ? false : true}
              className="btn btn-success"
              //onClick={handleMutation}
            >
              {loading ? "Adding..." : "Submit"}
            </button>
          </div>
        </div>
      ) : (
        <div className="mb-5">
          <Questions admin />
        </div>
      )}
    </>
  );
};

export default Qna;
