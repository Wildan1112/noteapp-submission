import SearchBar from "./SearchBar";

const NoteHeader = ({ setSearchKeyword }) => {
  return (
    <div className="note-app__header">
      <h1>Notes</h1>
      <SearchBar setSearchKeyword={setSearchKeyword} />
    </div>
  );
};

export default NoteHeader;
