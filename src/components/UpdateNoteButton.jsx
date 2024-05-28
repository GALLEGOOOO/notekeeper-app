import { UpdateNoteForm } from "./UpdateNoteForm";
export const UpdateNoteButton = ({ id, setNotes }) => {
  const handleUpdate = () => {};

  return (
    <div>
      <button onClick={handleUpdate} className="update-button">
        Update
      </button>
      <UpdateNoteForm id={id} setNotes={setNotes} />
    </div>
  );
};
