const SearchBar = ({ setSearchKeyword }) => {
  return (
    <div className="note-search">
      <input
        type="text"
        placeholder="Cari catatan ..."
        onChange={(e) => setSearchKeyword(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
