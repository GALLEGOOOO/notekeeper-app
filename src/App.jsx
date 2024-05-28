import { useNotes } from "./hooks/useNotes";
import "./App.css";
import NoteList from "./components/NoteList";
import "./NoteList.module.css";

function App() {
  const {
    notes,
    loading,
    handleNewNoteEntry,
    handleDeleteNoteEntry,
    handleUpdateNoteEntry,
  } = useNotes();

  return (
    <div className="Notes">
      {loading ? (
        <p>Cargando las notas...</p>
      ) : (
        <>
          <NoteList
            notes={notes}
            loading={loading}
            handleNewNoteEntry={handleNewNoteEntry}
            handleDeleteEntry={handleDeleteNoteEntry}
            handleUpdateNoteEntry={handleUpdateNoteEntry}
          />
        </>
      )}
    </div>
  );
}

export default App;
