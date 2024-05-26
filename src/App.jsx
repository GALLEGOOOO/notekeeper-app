import { useNotes } from "./hooks/useNotes";
import { NoteList } from "./components/NotesList/NotesList";
import "./App.css";

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
        <p>Cargant les notes...</p>
      ) : (
        <>
          <NoteList notes={notes} loading={loading} 
        handleNewNoteEntry={handleNewNoteEntry}
        handleDeleteEntry={handleDeleteNoteEntry}
        handleUpdateNoteEntry={handleUpdateNoteEntry}/>
        </>
      )}
    </div>
  );
}

export default App;
