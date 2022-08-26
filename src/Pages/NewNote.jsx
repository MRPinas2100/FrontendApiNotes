import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Header from "../Components/Header";
import createNote from "../Services/createNewNote";

function NewNote() {
  const [newNote, setNewNote] = useState({
    content: "",
    important: false,
  });

  const [token, setToken] = useState("");

  useEffect(() => {
    const localStorageUser = window.localStorage.getItem("userLogged");
    const currentUser = JSON.parse(localStorageUser);
    setToken(currentUser.token);
  }, []);

  const handleChange = (event) => {
    setNewNote({
      ...newNote,
      [event.target.name]:
        event.target.type === "checkbox"
          ? event.target.checked
          : event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    let response = await createNote(newNote, token);
    alert(response);
    setNewNote({
      content: "",
      important: false,
    });
  };

  return (
    <div className="container">
      <Header />
      <div className="form-container">
        <h3>Create New Note</h3>
        <form className="form-newNote" onSubmit={handleSubmit}>
          <p>Content:</p>
          <input
            type="text"
            name="content"
            onChange={handleChange}
            value={newNote.content}
          />
          <p>Important:</p>
          <div className="checkbox-container">
            <input
              type="checkbox"
              name="important"
              onChange={handleChange}
              checked={newNote.important}
            />
            <button>Send</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default NewNote;
