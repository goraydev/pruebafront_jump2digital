import titleRickyMorty from "./assets/titleRickyMorty.webp";
import { Search } from "./components/Search";
import { Cards } from "./components/Cards";
import useFetch from "./hooks/useFetch";
import getCharacterApi from "./api/getCharacterApi";
import { Pagination } from "./components/Pagination";
import { useState } from "react";
import { useEffect } from "react";
import appApi from "./api/appApi";

function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchInput, setSearchInput] = useState("");
  const { characters, isLoading, setCharacters } = useFetch(currentPage);

  const handlekeyUp = async (v) => {
    setCurrentPage(1);
    const foundCharacter = await getCharacterApi(v);
    setCharacters(foundCharacter);
  };

  const handleNextPage = async () => {
    setCurrentPage(currentPage + 1);
  };
  const handlePrevPage = async () => {
    setCurrentPage(currentPage - 1);
  };

  const freshCharacters = async () => {
    const getCharactersPage = await appApi(currentPage, searchInput);
    setCharacters(getCharactersPage);
  };

  useEffect(() => {
    freshCharacters();
  }, [currentPage]);

  return (
    <main className="container">
      <img
        src={titleRickyMorty}
        alt="logo Ricky y Morty"
        width="400"
        height="50"
        className="logo"
      />
      <Search
        handleKey={(v) => handlekeyUp(v)}
        searchInput={searchInput}
        setSearchInput={setSearchInput}
      />

      <h1 className="text-4xl text-white mb-10 font-bold titulo relative text-center md:text-start">
        Lista de personajes
      </h1>

      <Cards
        characters={characters}
        isLoading={isLoading}
        currentPage={currentPage}
      />
      <Pagination
        currentPage={currentPage}
        characters={characters}
        nextPage={handleNextPage}
        prevPage={handlePrevPage}
      />
    </main>
  );
}

export default App;
