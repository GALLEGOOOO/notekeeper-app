import { useNotes } from "./hooks/useNotes";
import "./App.css";
import NoteList from "./components/NoteList";

function App() {
  const { notes, loading } = useNotes();

  return (
    <div className="Notes">
      {loading ? (
        <p>Cargando las notas...</p>
      ) : (
        <>
          <NoteList notes={notes} loading={loading} />
        </>
      )}
    </div>
  );
}

export default App;
