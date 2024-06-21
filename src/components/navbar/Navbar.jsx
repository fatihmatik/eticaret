import React, { useState } from "react";
import SearchBar from "../searchbar/Searchbar";

import logo from "../../assets/logo.png";
import pp from "../../assets/profile.png";
import basket from "../../assets/sepet.png";
const Navbar = () => {
  const handleSearch = (searchTerm) => {
    console.log("Search term:", searchTerm);
  };


  const [focus, setFocus] = useState("");
  
  return (
    <header className="bg-white shadow">
      <div className="container mx-auto py-6 px-4 flex justify-between items-center">
        <img src={logo} alt="logo"/>

        <SearchBar onSearch={handleSearch} />
        <nav className="flex justify-between items-center">
          <a
            href="#a"
            className={`${focus==="profile" ? "text-red-900": "text-yellow-300"} hover:text-gray-700 font-bold mx-2 flex-row items-center`}
            onClick={()=>setFocus("profile")}
          >
            <img src={pp} alt="" />
            PROFIL{focus === "profile" ? <p>AAA</p>: <p>X</p>}
          </a>
          <a
            href="#a"
            className="text-gray-500 hover:text-gray-700 mx-2 flex-row items-center"
            onClick={()=>setFocus("sepet")}
          >
            <img src={basket} alt="" />
            SEPET{focus === "sepet" ? <p>AAAs</p>: <p>Xs</p>}
          </a>
        </nav>
      </div>
    </header>
  );
};
export default Navbar;
