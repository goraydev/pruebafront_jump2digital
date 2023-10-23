import titleRickyMorty from "./assets/titleRickyMorty.webp";
import { Search } from "./components/Search";
import { Cards } from "./components/Cards";
import useFetch from "./hooks/useFetch";

function App() {
  const { characters, isLoading } = useFetch();

  return (
    <>
      <main className="container">
        <img
          src={titleRickyMorty}
          alt="logo Ricky y Morty"
          width="400"
          height="50"
          className="logo"
        />
        <Search />

        <h1 className="text-4xl text-white mb-10 font-bold titulo relative text-center md:text-start">
          Lista de personajes
        </h1>

        <Cards characters={characters} isLoading={isLoading} />
      </main>
    </>
  );
}

export default App;
