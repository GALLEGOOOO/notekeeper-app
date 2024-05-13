import { useState, useEffect } from "react";

const NoteList = () => {
  const [notes, setNotes] = useState([]);

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
