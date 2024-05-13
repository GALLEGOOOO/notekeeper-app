import { useState, useEffect } from "react";
import noteService from "../services/notes/noteService";

export const useNotes = () => {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleNewNotes = (newNotes) => {
    setNotes(newNotes);
  };

  useEffect(() => {
    noteService
      .getAllNotes()
      .then((data) => {
        handleNewNotes(data.notes);
      })
      .catch((error) => console.error("Error fetching notes:", error))
      .finally(() => setLoading(false));
  }, []);
  return { notes, loading, handleNewNotes };
};
