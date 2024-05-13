import { useNotes } from "./hooks/useNotes";
import "./App.css";
import NoteList from "./components/NoteList";

function App() {
  const { notes, loading } = useNotes();

  return (
    <div className="Notes">
      {loading ? (
        <p>Cargant les notes...</p>
      ) : (
        <>
          <NoteList notes={notes} loading={loading} />
        </>
      )}
    </div>
  );
}

export default App;
