import titleRickyMorty from "./assets/titleRickyMorty.webp";
import { Search } from "./components/Search";
import { Cards } from "./components/Cards";
import useFetch from "./hooks/useFetch";
import getCharacterApi from "./api/getCharacterApi";

function App() {
  const { characters, isLoading, setCharacters } = useFetch();

  const handlekeyUp = async (v) => {
    const foundCharacter = await getCharacterApi(v);
    setCharacters(foundCharacter);
  };

  return (
    <main className="container">
      <img
        src={titleRickyMorty}
        alt="logo Ricky y Morty"
        width="400"
        height="50"
        className="logo"
      />
      <Search handleKey={(v) => handlekeyUp(v)} />

      <h1 className="text-4xl text-white mb-10 font-bold titulo relative text-center md:text-start">
        Lista de personajes
      </h1>

      <Cards characters={characters} isLoading={isLoading} />
    </main>
  );
}

export default App;
