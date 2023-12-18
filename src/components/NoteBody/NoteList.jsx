import { showFormattedDate } from "../../utils/index";
const ActiveNoteList = ({
  title,
  titleBtn,
  notes,
  onDeleteNote,
  onToggleArchivedNote,
}) => {
  return (
    <>
      <h2>{title}</h2>
      {notes.length === 0 && (
        <p className="notes-list__empty-message">Tidak ada catatan</p>
      )}

      <div className="notes-list">
        {notes.map((note) => (
          <div className="note-item" key={note.id}>
            <div className="note-item__content">
              <h3 className="note-item__title">{note.title}</h3>
              <p className="note-item__date">
                {showFormattedDate(note.createdAt)}
              </p>
              <p className="note-item__body">{note.body}</p>
            </div>
            <div className="note-item__action">
              <button
                className="note-item__delete-button"
                onClick={() => onDeleteNote(note.id)}
              >
                Delete
              </button>
              <button
                className="note-item__archive-button"
                onClick={() => onToggleArchivedNote(note.id)}
              >
                {titleBtn}
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
export default ActiveNoteList;
