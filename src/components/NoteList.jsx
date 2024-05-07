// src/components/NoteList.js

import { useState, useEffect } from "react";

const NoteList = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    // Llama a la función getAllNotes cuando el componente se monta
    getAllNotes()
      .then((data) => setNotes(data.notes))
      .catch((error) => console.error("Error fetching notes:", error));
  }, []);

  return (
    <div>
      <h2>Notes</h2>
      <ul>
        {notes.map((note) => (
          <li key={note.id}>{note.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default NoteList;
