import {useState, useEffect} from "react";

export const useNotes = () => {
    const  [notes, setNotes] = useState ([])
    const [loading, setLoading] = useState (true)

    const handleNewNotes = (newNotes) => {
        setNotes(newNotes)
    };
};