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
    console.error("Error al obtener las notas:", error);
    throw error;
  }
};


const getAllNotes = async () => {return await getData(baseUrl)};

// create crud options for notes

export default {
  getAllNotes,
};