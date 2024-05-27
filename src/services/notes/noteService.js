const baseUrl = import.meta.env.VITE_API_BASE_URL;
console.log("baseUrl: ", baseUrl);

const getData = async (url, method = 'GET', body = null) => {
  try {
    const options = {
      method,
      headers: { 'Content-Type': 'application/json', },
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
  return await getData(baseUrl)};

const addNewNoteEntry = async (body) => {
  await getData(baseUrl, "POST", body);
};
const updateNoteEntry = async (id, body) => {
  const url = `${baseUrl}/${id}`; 
  await getData(url, "PUT", body);
};

const deleteNoteEntry = async (id) => {
  const url = `${baseUrl}/${id}`;
  await getData(url, "DELETE");
};

// create crud options for notes

export default {
  getAllNotes,
  addNewNoteEntry,
  deleteNoteEntry,
  updateNoteEntry,
};

export { notesService } from "./notes/notesService";