import React, { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (onSearch) {
      onSearch(searchTerm);
    }
  };

  return (
    <form
      onSubmit={handleSearch}
      className="flex items-center bg-gray-500 rounded shadow p-2 w-full"
      style={{ maxWidth: "800px" }}
    >
      <input
        type="text"
        value={searchTerm}
        onChange={handleInputChange}
        className="w-full px-4 py-2 rounded-l outline-none"
        placeholder="Search..."
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded-r hover:bg-blue-600"
      >
        Search
      </button>
    </form>
  );
};

export default SearchBar;
