import { useNotes } from "./hooks/useNotes";
import "./App.css";
import NoteList from "./components/NoteList";

function App() {
  const { notes, loading, handleNewNoteEntry } = useNotes();

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
          />
        </>
      )}
    </div>
  );
}

export default App;
