import React, { useState, useContext, useEffect } from "react";
import SelectRating from "../components/SelectRating";
import FeedbackContext from "../context/FeedbackContext";
import Button from "./Button";

function FeedbackForm() {
  const [text, setText] = useState("");
  const [isDisable, setIsDisable] = useState(true);
  const [message, setMessage] = useState("");
  const [selected, setSelected] = useState(10);
  const [rating, setRating] = useState(10);
  const { addFeedback, feedbackEdit, updateEdit } = useContext(FeedbackContext);

  const handleTextChange = (e) => {
    if (text == "") {
      setIsDisable(true);
      setMessage(null);
    } else if (text !== "" && text.trim().length <= 10) {
      setMessage("Text must be at least 10 characters");
      setIsDisable(true);
    } else {
      setMessage(null);
      setIsDisable(false);
    }
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (text.trim().length >= 10) {
      const newFeedback = {
        text,
        rating,
      };

      if (feedbackEdit.edit === true) {
        updateEdit(feedbackEdit.item.id, newFeedback);
      } else {
        addFeedback(newFeedback);
      }
      setText("");
    }
  };

  useEffect(() => {
    if (feedbackEdit.edit === true) {
      setIsDisable(false);
      setText(feedbackEdit.item.text);
      setRating(feedbackEdit.item.rating);
    }
  }, [feedbackEdit]);

  return (
    <div className="card">
      <form onSubmit={handleSubmit}>
        <h2>How would you rate your service with us</h2>

        <SelectRating
          setSelected={setSelected}
          selected={selected}
          select={(rating) => setRating(rating)}
        />
        <div className="input-group">
          <input
            value={text}
            onChange={handleTextChange}
            type="text"
            placeholder="Write a review"
          />
          <Button type="submit" version="primary" isDisable={isDisable}>
            Send
          </Button>
        </div>
      </form>
      {message && <div className="message">{message}</div>}
    </div>
  );
}

export default FeedbackForm;
