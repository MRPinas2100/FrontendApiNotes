import React from "react";
import { useState } from "react";
import axios from "axios";
import imageCard from "../assets/4255782.jpg";

function CardNotes({ note }) {
  const [currentNote, setCurrentNote] = useState(note);

  const handleClickComplete = async () => {
    let importantPivot = null;
    if (currentNote.important === true) {
      importantPivot = false;
    } else {
      importantPivot = true;
    }
    try {
      let updateNote = { ...currentNote, important: importantPivot };
      const response = await axios.put(
        `http://localhost:3001/updateNote/${currentNote.id}`,
        updateNote
      );
      const { data } = response;
      setCurrentNote(data);
    } catch (error) {
      console.log(error);
    }
  };
  const handleClickEdit = () => {
    console.log("new page");
  };
  const handleClickDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3001/deleteNote/${id}`);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="card">
      <div className="img-card">
        <img src={imageCard} alt="img-card" />
      </div>
      <div className="body-card">
        <span>{currentNote.date.slice(0, -14)}</span>
        <div>{currentNote.content}</div>
        <div>{currentNote.important === true ? "Si" : "No"}</div>
        <div className="btn-card-box">
          <button className="btn" onClick={handleClickComplete}>
            C
          </button>
          <button className="btn" onClick={handleClickEdit}>
            E
          </button>
          <button
            className="btn"
            onClick={() => handleClickDelete(currentNote.id)}
          >
            D
          </button>
        </div>
      </div>
    </div>
  );
}

export default CardNotes;
