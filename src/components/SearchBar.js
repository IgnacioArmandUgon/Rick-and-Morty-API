import React, { useState } from "react";
import Characters from "./Characters";

function SearchBar({ placeholder, data }) {
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    console.log(searchWord)
    setWordEntered(searchWord);
    const newFilter = data.filter((value) => {
      console.log("newFilter value: "+value.name+", SearchWord: "+searchWord)
      return value.name.toLowerCase().includes(searchWord.toLowerCase());
    });

    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
      console.log(filteredData)
    }
  };

  const clearInput = () => {
    setFilteredData([]);
    setWordEntered("");
  };

  return (
    <div className="search">
      <div className="searchInputs">
        <input
          type="text"
          placeholder={placeholder}
          value={wordEntered}
          onChange={handleFilter}
          className="form-control mb-4"
        />
        <div className="searchIcon">
        </div>
      </div>
      {filteredData.length != 0 && (
        <div className="dataResult">
          {filteredData.map((value, key) => {
            return (
              <Characters characters={filteredData} />
            );
          })}
        </div>
      )}
    </div>
  );
}

export default SearchBar;
