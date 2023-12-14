import { useState } from "react";
import { getInitialData } from "../../src/utils/index";
import NoteHeader from "./NoteHeader/NoteHeader";
import NoteBody from "./NoteBody/NoteBody";

const NoteApp = () => {
  const [notes, setNotes] = useState(getInitialData());
  const [searchKeyword, setSearchKeyword] = useState("");

  const filteredNotes = notes.filter((note) =>
    note.title.toLowerCase().includes(searchKeyword.toLowerCase())
  );

  function addNoteHandler(title, body) {
    const newNote = {
      id: +new Date(),
      title,
      body,
      archived: false,
      createdAt: new Date().toISOString(),
    };
    setNotes([newNote, ...notes]);
  }
  function deleteNoteHandler(id) {
    setNotes(notes.filter((note) => note.id !== id));
  }
  function toggleArchivedNoteHandler(id) {
    setNotes(
      notes.map((note) =>
        note.id === id ? { ...note, archived: !note.archived } : note
      )
    );
  }
  return (
    <>
      <NoteHeader setSearchKeyword={setSearchKeyword} />
      <NoteBody
        notes={filteredNotes}
        onAddNote={addNoteHandler}
        onDeleteNote={deleteNoteHandler}
        onToggleArchivedNote={toggleArchivedNoteHandler}
      />
    </>
  );
};
export default NoteApp;
