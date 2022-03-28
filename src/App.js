import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Characters from "./components/Characters";
import Pagination from "./components/Pagination";

function App() {
  const [characters, setCharacters] = useState([]);
  const [info, setInfo] = useState({});

  const URL = "https://rickandmortyapi.com/api/character";
  const fetchCharacters = (URL) => {
    fetch(URL)
      .then((response) => response.json()) //promesa
      .then((data) => {
        setCharacters(data.results);
        setInfo(data.info);
      }) //promesa
      .catch((error) => console.log(error));
  };

  const onPrevious = () => {
    fetchCharacters(info.prev);
  };
  const onNext = () => {
    fetchCharacters(info.next);
  };

  useEffect(() => {
    fetchCharacters(URL);
  }, []);

  return (
    <>
      <Navbar brand="Rick and Morty app" />

      <div className="container mt-5">
        <Pagination
          prev={info.prev}
          next={info.next}
          onPrevious={onPrevious}
          onNext={onNext}
        />
        <Characters characters={characters} />
        <Pagination
          prev={info.prev}
          next={info.next}
          onPrevious={onPrevious}
          onNext={onNext}
        />  
      </div>
    </>
  );
}

export default App;
