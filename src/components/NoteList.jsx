import { useState } from "react";
import Note from "./Note.jsx";
import NoteForm from "./NoteForm.jsx";
import { DeleteNoteButton } from "./DeleteNoteButton.jsx";
import { UpdateNoteForm } from "./UpdateNoteForm.jsx";

const NoteList = ({
  notes,
  loading,
  handleNewNoteEntry,
  handleDeleteEntry,
  handleUpdateNoteEntry,
}) => {
  const [showForm, setShowForm] = useState(false);
  const [showUpdateFormId, setShowUpdateFormId] = useState(null);

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  const toggleUpdateForm = (id) => {
    setShowUpdateFormId(showUpdateFormId === id ? null : id);
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
                <DeleteNoteButton
                  id={note.id}
                  handleDelete={handleDeleteEntry}
                />
                <button onClick={() => toggleUpdateForm(note.id)}>
                  {showUpdateFormId === note.id ? "Cancel" : "Update"}
                </button>
                {showUpdateFormId === note.id && (
                  <UpdateNoteForm
                    note={note}
                    handleUpdateNoteEntry={handleUpdateNoteEntry}
                    toggleForm={() => toggleUpdateForm(note.id)}
                  />
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default NoteList;
