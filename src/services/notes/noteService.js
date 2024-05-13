const baseUrl = import.meta.env.VITE_API_BASE_URL;

const getAllNotes = () => {
    return fetch(baseUrl).then((response) => response.json())
    .catch((error) => console.log("Error al obtenir les notes: ", error));
};


export default {
    getAllNotes,
}