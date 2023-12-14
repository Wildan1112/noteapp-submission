import NoteInputForm from "./NoteInputForm";
import ActiveNoteList from "./ActiveNoteList";

import ArchivedNoteList from "./ArchivedNoteList";

const NoteBody = ({ notes, onAddNote, onDeleteNote, onToggleArchivedNote }) => {
  const activeNotes = notes.filter((note) => note.archived === false);
  const archivedNotes = notes.filter((note) => note.archived === true);

  return (
    <div className="note-app__body">
      <NoteInputForm onAddNote={onAddNote} />
      <ActiveNoteList
        activeNotes={activeNotes}
        onDeleteNote={onDeleteNote}
        onToggleArchivedNote={onToggleArchivedNote}
      />
      <ArchivedNoteList
        archivedNotes={archivedNotes}
        onDeleteNote={onDeleteNote}
        onToggleArchivedNote={onToggleArchivedNote}
      />
    </div>
  );
};

export default NoteBody;
