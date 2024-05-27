import noteService from "../services/notes/noteService";

const NoteForm = ({ newName, setNewName, newNumber, setNewNumber, notes, setNotes }) => {
    const addNewNote = async (event) => {
        event.preventDefault();
        const noteFound = notes.find((note) => note.name === newName);

        if (!noteFound) {
            const newNote = {
                id: Date.now(),
                name: newName,
                number: newNumber,
            };

            try {
                const data = await noteService.createNote(newNote);
                setNotes([...notes, data]);
            } catch (error) {
                console.error("Error creating note:", error);
            }
        } else {
            if (
                window.confirm(`${newName} already exists. Do you want to update it with a new number?`)
            ) {
                const updatedNote = {
                    ...noteFound,
                    number: newNumber,
                };

                try {
                    await noteService.updateNote(updatedNote);
                    const updatedNotes = await noteService.getAllNotes();
                    setNotes(updatedNotes);
                } catch (error) {
                    console.error("Error updating note:", error);
                }
            }
        }
    };

    return (
        <div>
            <h2>Add a New Note:</h2>
            <form onSubmit={addNewNote}>
                <div>
                    <label htmlFor="new-Name">Name: </label>
                    <input
                        id="new-Name"
                        value={newName}
                        onChange={(e) => setNewName(e.target.value)}
                    />
                    <br />
                    <br />
                    <label htmlFor="new-Number">Number: </label>
                    <input
                        id="new-Number"
                        value={newNumber}
                        onChange={(e) => setNewNumber(e.target.value)}
                    />
                    
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
