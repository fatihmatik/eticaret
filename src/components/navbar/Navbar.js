import React from "react";
import SearchBar from "../searchbar/Searchbar";

import logo from "../../assets/logo.png";
import pp from "../../assets/profile.png";
import basket from "../../assets/sepet.png";
const Navbar = () => {
  const handleSearch = (searchTerm) => {
    console.log("Search term:", searchTerm);
    // Implement your search functionality here
  };

  return (
    <header className="bg-white shadow">
      <div className="container mx-auto py-6 px-4 flex justify-between items-center">
        <img src={logo} />

        <SearchBar onSearch={handleSearch} />
        <nav className="flex justify-between items-center">
          <a
            href="#"
            className="text-gray-500 hover:text-gray-700 mx-2 flex-row items-center"
          >
            <img src={pp} alt="" />
            PROFIL
          </a>
          <a
            href="#"
            className="text-gray-500 hover:text-gray-700 mx-2 flex-row items-center"
          >
            <img src={basket} alt="" />
            SEPET
          </a>
        </nav>
      </div>
    </header>
  );
};
export default Navbar;
