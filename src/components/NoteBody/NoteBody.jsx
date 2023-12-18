import NoteInputForm from "./NoteInputForm";
import NoteList from "./NoteList";

const NoteBody = ({ notes, onAddNote, onDeleteNote, onToggleArchivedNote }) => {
  const activeNotes = notes.filter((note) => note.archived === false);
  const archivedNotes = notes.filter((note) => note.archived === true);

  return (
    <div className="note-app__body">
      <NoteInputForm onAddNote={onAddNote} />
      {/* Active Notes */}
      <NoteList
        title="Catatan Aktif"
        titleBtn="Arsipkan"
        notes={activeNotes}
        onDeleteNote={onDeleteNote}
        onToggleArchivedNote={onToggleArchivedNote}
      />
      {/* Archived Notes */}
      <NoteList
        title="Arsip"
        titleBtn="Pindahkan"
        notes={archivedNotes}
        onDeleteNote={onDeleteNote}
        onToggleArchivedNote={onToggleArchivedNote}
      />
    </div>
  );
};

export default NoteBody;
