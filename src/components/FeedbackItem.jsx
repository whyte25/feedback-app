import React, { useState, useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";

const FeedbackItem = ({ item }) => {
  const { handleDelete, editFeedback } = useContext(FeedbackContext);

  const { rating, text, id } = item;
  return (
    <div className="card">
      <div className="num-display">{rating}</div>
      <button className="close" onClick={() => handleDelete(id)}>
        <span style={{ color: "purple", fontSize: "14px", fontWeight: "bold" }}>
          x
        </span>
      </button>
      <button className="edit" onClick={() => editFeedback(item)}>
        <span style={{ color: "purple", fontSize: "14px", fontWeight: "bold" }}>
          #
        </span>
      </button>
      <div className="text-display">{text} </div>
    </div>
  );
};

export default FeedbackItem;
