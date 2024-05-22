const Note = ({ note }) => {
    return (
      <div>
        <h1>{note.name}</h1>
        <p>{note.description}</p>
        <p>{note.important ? "Importante" : "No importante"}</p>
        <p>{note.status}</p>
        <p>{note.due_date}</p>
        <p>{note.created_at}</p>
        <p>{note.id}</p>
      </div>
    );
  };
  
  export default Note;