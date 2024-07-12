import React, { useState, useCallback } from "react";
import "./form.css";
import addIcon from "../../assets/add.svg";
import errorIcon from "../../assets/error-icon.svg";
import Notes from "../Notes/Notes";

function Form() {
  const [formData, setFormData] = useState({ title: "", message: "" });
  const [items, setItems] = useState([]);
  const [formValid, setFormValid] = useState({ title: true, message: true });

  const handleChange = useCallback((e) => {
    const { value, name } = e.target;
    setFormData((prevVal) => ({
      ...prevVal,
      [name]: value,
    }));
    setFormValid((prevValid) => ({
      ...prevValid,
      [name]: true,
    }));
  }, []);

  const validateForm = () => {
    let isValid = true;
    let newFormValid = { ...formValid };
    if (!formData.title) {
      newFormValid.title = false;
      isValid = false;
    }
    if (!formData.message) {
      newFormValid.message = false;
      isValid = false;
    }
    setFormValid(newFormValid);
    return isValid;
  };

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      if (validateForm()) {
        setItems((prevNotes) => [...prevNotes, formData]);
        setFormData({ title: "", message: "" });
      }
    },
    [formData, formValid]
  );

  const deleteNote = useCallback((id) => {
    setItems((prevItem) => prevItem.filter((_, index) => index !== id));
  }, []);

  return (
    <div className="form-wrapper">
      <form className="form-container">
        <div className="field">
          <label htmlFor="userText">Your Title</label>
          <input
            type="text"
            name="title"
            id="userText"
            value={formData.title}
            onChange={handleChange}
            className={`${!formValid.title && "error-border"}`}
            aria-invalid={!formValid.title}
            aria-describedby="titleError"
          />
          {!formValid.title && (
            <span id="titleError" className="error">
              <img src={errorIcon} alt="error icon" />
              Can't be blank!
            </span>
          )}
        </div>
        <div className="field">
          <label htmlFor="userMessage">Your Message</label>
          <textarea
            name="message"
            rows={6}
            id="userMessage"
            value={formData.message}
            onChange={handleChange}
            className={`${!formValid.message && "error-border"}`}
            aria-invalid={!formValid.message}
            aria-describedby="messageError"
          />
          {!formValid.message && (
            <span id="messageError" className="error">
              <img src={errorIcon} alt="error icon" />
              Can't be blank!
            </span>
          )}
        </div>
        <div className="field button">
          <button type="button" className="btn-form" onClick={handleSubmit}>
            <img src={addIcon} alt="add icon" className="icon" />
          </button>
        </div>
      </form>
      <div className="notes-wrapper">
        {items.map((item, index) => (
          <Notes key={index} id={index} notes={item} onDelete={deleteNote} />
        ))}
      </div>
    </div>
  );
}

export default Form;
