import { useEffect, useState } from "react";
import notesService from "../services/notes/noteService";
export const useNotes = () => {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);

const handleNewNotesValue = (newValue) => {
  setNotes(newValue);
};

useEffect(() => {
  const getAllNotesHandler = async () => {
    notesService
      .getAllNotes()
      .then((data) => handleNewNotesValue(data.notes))
      .catch((error) =>
        console.error("Error al carregar todes les notes:", error)
      )
      .finally(() => {
        setLoading(false);
      });
  };
  getAllNotesHandler();
}, []);
 
const handleNewNoteEntry = async (noteValues) => {
  setLoading(true);
  try {
    await notesService.addNewNoteEntry(noteValues);
    const data = await notesService.getAllNotes();
    handleNewNotesValue(data.notes);
  } catch (error) {
    console.error("Error:", error);
  } finally {
    setLoading(false);
  }
};

const handleUpdateNoteEntry = async (id, noteValues) => {
  setLoading(true);
  try {
    await notesService.updateNoteEntry(id, noteValues);
    const data = await notesService.getAllNotes();
    handleNewNotesValue(data.notes);
  } catch (error) {
    console.error("Error:", error);
  } finally {
    setLoading(false);
  }
};
const handleDeleteNoteEntry = async (id) => {
  setLoading(true);
  try {
    await notesService.deleteNoteEntry(id);
    const data = await notesService.getAllNotes();
    handleNewNotesValue(data.notes);
  } catch (error) {
    console.error("Error:", error);
  } finally {
    setLoading(false);
  }
};

return {
  notes,
  handleNewNotesValue,
  handleNewNoteEntry,
  handleDeleteNoteEntry,
  handleUpdateNoteEntry,
  loading,
};
};

