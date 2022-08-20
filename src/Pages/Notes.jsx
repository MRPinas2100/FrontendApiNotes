import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import CardNotes from "../Components/CardNotes";
import Header from "../Components/Header";
import userNotes from "../Services/getNotes";

function Notes() {
  const [userPersonalNotes, setUserPersonalNotes] = useState([]);
  const location = useLocation();
  useEffect(() => {
    getUserNotes();
  }, [userPersonalNotes]);
  const getUserNotes = async () => {
    try {
      const allUserNotes = await userNotes.getNotes(location.state.user.id);
      setUserPersonalNotes(allUserNotes.notes);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="container-notes">
      <Header />
      <section className="loop-notes">
        {userPersonalNotes.map((note) => (
          <CardNotes key={note.id} note={note} />
        ))}
      </section>
    </div>
  );
}

export default Notes;
