import { useState } from "react";

const NoteInputForm = ({ onAddNote }) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [charsLimit, setCharsLimit] = useState(50);

  function onChangeTitle(e) {
    if (e.target.value.length <= charsLimit) {
      setTitle(e.target.value);
    }
  }

  function onSubmitNote(e) {
    e.preventDefault();

    onAddNote(title, body);
    setTitle("");
    setBody("");
    setCharsLimit(50);
  }
  return (
    <div className="note-input">
      <h2>Buat catatan</h2>
      <form onSubmit={onSubmitNote}>
        <p className="note-input__title__char-limit">
          Sisa karakter: {charsLimit - title.length}
        </p>
        <input
          className="note-input__title"
          type="text"
          placeholder="Masukkan judul ..."
          required
          value={title}
          onChange={onChangeTitle}
        />
        <textarea
          className="note-input__body"
          type="text"
          placeholder="Tuliskan catatan disini ..."
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <button type="submit">Buat</button>
      </form>
    </div>
  );
};

export default NoteInputForm;
