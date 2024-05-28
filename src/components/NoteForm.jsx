import { useState } from "react";
import Note from "../components/Note";
import { validateType, validateNonEmpty, validateEnum } from "../helpers/validation";

const NoteForm = ({ handleNewNoteEntry }) => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    important: false,
    status: "pending",
    dueDate: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const addNewNote = async (e) => {
    e.preventDefault();
    if (
      validateType(formData) &&
      validateNonEmpty(formData) &&
      validateEnum(formData)
    ) {
      try {
        const data = await Note.create(formData);
        handleNewNoteEntry([...NoteForm, data]);
        setFormData({
          name: "",
          description: "",
          important: false,
          status: "pending",
          dueDate: "",
        });
      } catch (error) {
        console.error("Error al crear la nota:", error);
      }
    }
  };

  return (
    <div>
      <h2>Afegir una nova nota</h2>
      <form onSubmit={addNewNote}>
        <div>
          <label htmlFor="name">Nom: </label>
          <input
            name="name"
            id="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <br />
          <br />
          <label htmlFor="description">Descripció: </label>
          <input
            id="description"
            name="description"
            type="text"
            value={formData.description}
            onChange={handleChange}
            required
          />
          <br />
          <br />
          <label htmlFor="important">Important </label>
          <input
            id="important"
            name="important"
            type="checkbox"
            checked={formData.important}
            onChange={handleChange}
          />
          <br />
          <br />
          <label htmlFor="status">Estat: </label>
          <select
            id="status"
            name="status"
            value={formData.status}
            onChange={handleChange}
            required
          >
            <option value="done">Feta</option>
            <option value="pending">Pendent</option>
            <option value="in progress">En Progress</option>
          </select>
          <br />
          <br />
          <label htmlFor="dueDate">Data de venciment: </label>
          <input
            id="dueDate"
            name="dueDate"
            type="date"
            value={formData.dueDate}
            onChange={handleChange}
            required
          />
        </div>
        <br />
        <br />
        <div>
          <button type="submit">Afegir</button>
        </div>
      </form>
    </div>
  );
};

export default NoteForm;
