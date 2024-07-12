import React from "react";
import "./notes.css";
import deleteIcon from "../../assets/delete-icon.svg"
function Notes({ notes,id,onDelete }) {
  const { title, message } = notes;


  return (
    
      <div className="note">
        <div className="delete-icon-container" onClick={()=>onDelete(id)}>
          <img src={deleteIcon} alt="delete icon" className="delete-icon"/>  
        </div>
        
        <div>
        <h2 className="note-title">{title}</h2>
        <p className="note-message">{message}</p>
        </div>
      </div>
    
  );
}

export default Notes;
