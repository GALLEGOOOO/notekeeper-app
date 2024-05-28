import { useState } from "react";

export const UpdateNoteForm = ({ note, handleUpdateNoteEntry, toggleForm }) => {
  const [formData, setFormData] = useState({
    name: note.name || "",
    description: note.description || "",
    important: note.important || false,
    status: note.status || "pending",
    dueDate: note.dueDate || "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleUpdateNoteEntry(note.id, formData);
    toggleForm(); // Close the form after submitting
  };

  return (
    <div>
      <h2>Update Note:</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name: </label>
          <input
            name="name"
            id="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
          />
          <br />
          <br />
          <label htmlFor="description">Description: </label>
          <input
            id="description"
            name="description"
            type="text"
            value={formData.description}
            onChange={handleChange}
          />
          <br />
          <br />
          <label htmlFor="important">Important: </label>
          <input
            id="important"
            name="important"
            type="checkbox"
            checked={formData.important}
            onChange={handleChange}
          />
          <br />
          <br />
          <label htmlFor="status">Status: </label>
          <select
            id="status"
            name="status"
            value={formData.status}
            onChange={handleChange}
          >
            <option value="done">done</option>
            <option value="pending">pending</option>
            <option value="in progress">in progress</option>
          </select>
          <br />
          <br />
          <label htmlFor="dueDate">Due Date: </label>
          <input
            id="dueDate"
            name="dueDate"
            type="date"
            value={formData.dueDate}
            onChange={handleChange}
          />
        </div>
        <br />
        <br />
        <div>
          <button type="submit">Update</button>
        </div>
      </form>
    </div>
  );
};
