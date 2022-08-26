import React, { useEffect, useState } from "react";
import CardNotes from "../Components/CardNotes";
import Header from "../Components/Header";
import userNotes from "../Services/getNotes";

function Notes() {
  const [userPersonalNotes, setUserPersonalNotes] = useState([]);

  useEffect(() => {
    getUserNotes();
  }, []);

  const getUserNotes = async () => {
    try {
      const userLogged = window.localStorage.getItem("userLogged");
      const currentUser = JSON.parse(userLogged);
      const allUserNotes = await userNotes.getNotes(currentUser.id);
      setUserPersonalNotes(allUserNotes.notes);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container">
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
