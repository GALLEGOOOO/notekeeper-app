import noteService from "../services/notes/notesService";

const NoteForm = ({
  newName,
  setNewName,
  newNumber,
  setNewNumber,
  notes,
  setNotes,
  handleNewNoteEntry,
}) => {
  const addNewNote = async (event) => {
    event.preventDefault();
    const { name, description, important, status, dueDate } = event.target;

    const newNote = {
      name: name.value,
      description: description.value,
      important: important.value === "on" ? true : false,
      status: status.value,
      dueDate: dueDate.value,
    };

    try {
      handleNewNoteEntry(newNote)
        .then((response) => {
          console.log("response", response);
        })
        .catch((error) => {
          console.log("error", error);
        });
    } catch (error) {
      console.error("Error creating note:", error);
    }
  };

  return (
    <div>
      <h2>Add a New Note:</h2>
      <form onSubmit={addNewNote}>
        <div>
          <label htmlFor="name">Name: </label>
          <input name="name" id="name" type="text" />
          <br />
          <br />
          <label htmlFor="description">Description: </label>
          <input id="description" name="description" type="text" />
          <br />
          <br />
          <label htmlFor="important">Important: </label>
          <input id="important" name="important" type="checkbox" />
          <br />
          <br />
          <label htmlFor="status">Status: </label>
          <select id="status" name="status">
            <option value="done">done</option>
            <option value="pending">pending</option>
            <option value="in progress">in progress</option>
          </select>
          <br />
          <br />
          <label htmlFor="dueDate">Due Date: </label>
          <input id="dueDate" name="dueDate" type="date" />
        </div>
        <br />
        <br />
        <div>
          <button type="submit">Add</button>
        </div>
      </form>
    </div>
  );
};

export default NoteForm;
