const baseUrl = import.meta.env.VITE_API_BASE_URL;

const getData = async (url, method, body) => {
  try {
    const options = {
      method,
      headers: { "Content-Type": "application/json" },
    };
    if (body) options.body = JSON.stringify(body);

    const response = await fetch(url, options);

    if (!response.ok) {
      console.log(`HTTP error! status: ${response.status}`);
      return null;
    }

    const data = await response.json();

    return data;
  } catch (error) {
    console.error("Error al carregar les notes:", error);
    throw error;
  }
};

const getAllNotes = async () => {
  return await getData(baseUrl, "GET", null);
};

const addNewNoteEntry = async (body) => {
  const addNote = await getData(baseUrl, "POST", body);
  return addNote;
};

const updateNoteEntry = async (id, body) => {
  const url = `${baseUrl}/${id}`;
  const updateNote = await getData(url, "PUT", body);
  return updateNote;
};

const deleteNoteEntry = async (id) => {
  const url = `${baseUrl}/${id}`;
  const delateNote = await getData(url, "DELETE", null);
  return delateNote;
};

export default {
  getAllNotes: getAllNotes,
  addNewNoteEntry: addNewNoteEntry,
  deleteNoteEntry: deleteNoteEntry,
  updateNoteEntry: updateNoteEntry,
};
