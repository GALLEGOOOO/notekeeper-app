const NoteList = ({ notes, loading, addNewNote }) => {
  return (
    <div>
      <h2>Notes</h2>
      {loading ? (
        <p>Cargando...</p>
      ) : (
        <div>
          <button onClick={addNewNote}>Agregar Nueva Nota</button>
          <ul style={{fontFamily:"arial"}}>
            {notes.map((note) => (
              <li key={note.name}>
                <h1>{note.name}</h1>
                <p>{note.description}</p>
                <p>{note.important ? "Importante" : "No importante"}</p>
                <p>{note.status}</p>
                <p>{note.due_date}</p>
                <p>{note.created_at}</p>
                <p>{note.id}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default NoteList;
