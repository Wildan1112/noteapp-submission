import { showFormattedDate } from "../../utils/index";
const ActiveNoteList = ({
  activeNotes,
  onDeleteNote,
  onToggleArchivedNote,
}) => {
  return (
    <>
      <h2>Catatan Aktif</h2>
      {activeNotes.length === 0 && (
        <p className="notes-list__empty-message">Tidak ada catatan</p>
      )}

      <div className="notes-list">
        {activeNotes.map((note) => (
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
                Arsipkan
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
export default ActiveNoteList;
