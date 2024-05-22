import { useEffect, useState } from "react";
import notesService from "../services/notes/noteService";
export const useNotes = () => {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);

const handleNewNotesValue = (newValue) => {
  setNotes(newValue);
};

useEffect(() => {
  notesService
    .getAllNotes()
    .then((data) => handleNewNotesValue(data.notes))
    .catch((error) => console.error('Error al obtener todas las notas:', error))
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return {
    notes,
    handleNewNotesValue,
    loading,
  };
};