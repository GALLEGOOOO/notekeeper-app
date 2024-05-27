import Note from "./Note.jsx";
import NoteForm from "./NoteForm.jsx";
import { useState } from "react";

const NoteList = ({ notes, loading, handleNewNoteEntry }) => {
  const [showForm, setShowForm] = useState(false);

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  return (
    <div>
      <h2>Notes</h2>
      {loading ? (
        <p>Cargando...</p>
      ) : (
        <div>
          <button onClick={toggleForm}>Crear nota</button>
          {showForm && <NoteForm handleNewNoteEntry={handleNewNoteEntry} />}
          <ul style={{ fontFamily: "arial" }}>
            {notes.map((note) => (
              <li key={note.id}>
                <Note note={note} />
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default NoteList;
