import {useState, useEffect} from "react";
import noteService from "../services/notes/noteService";

export const useNotes = () => {
    const  [notes, setNotes] = useState ([])
    const [loading, setLoading] = useState (true)

    const handleNewNotes = (newNotes) => {
        setNotes(newNotes)
    };


    useEffect(() => {
        noteService
        .getAllNotes()
        .then((response) => response.json())
        .then((data) => {
            setNotes(data.notes)
            setLoading(false)
        })
        .catch((error) => console.error("Error fetching notes:", error));
    }, []);
};