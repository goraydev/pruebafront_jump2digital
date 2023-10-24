export const Search = ({ handleKey, searchInput, setSearchInput }) => {
  return (
    <div className="my-12 relative flex items-center justify-end">
      <form action="" className="w-full">
        <input
          type="text"
          name="search"
          id="search"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          onKeyUp={(e) => handleKey(e.target.value)}
          className="rounded-3xl p-4 w-full bg-teal-700 placeholder:text-slate-300 opacity-80"
          placeholder="Buscar personaje ..."
        />
      </form>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="icon icon-tabler icon-tabler-search absolute mr-3"
        width={24}
        height={24}
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="rgb(203, 213, 225)"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
        <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"></path>
        <path d="M21 21l-6 -6"></path>
      </svg>
    </div>
  );
};
