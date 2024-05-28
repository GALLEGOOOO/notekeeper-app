export const DeleteNoteButton = ({ id, handleDelete }) => {
  return (
    <button onClick={() => { handleDelete(id); }} className="delete-button" >
      Delete
    </button>
  );
};
