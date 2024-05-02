const BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const getAllNotes = async () => {
  try {
    const response = await fetch(`${BASE_URL}/notes`);
    if (!response.ok) {
      throw new Error("Failed to fetch notes");
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching notes:", error);
    throw error;
  }
};

export const createNote = async (noteData) => {
  try {
    const response = await fetch(`${BASE_URL}/notes`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(noteData),
    });
    if (!response.ok) {
      throw new Error("Failed to create note");
    }
    return await response.json();
  } catch (error) {
    console.error("Error creating note:", error);
    throw error;
  }
};