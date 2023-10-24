export const Pagination = ({ characters, prevPage, nextPage, currentPage }) => {
  return (
    <nav role="navigation" aria-label="Pagination Navigation" className="mt-8">
      <ul className="flex list-none items-center justify-center text-sm text-slate-100 md:gap-1">
        <li>
          {characters.info?.prev !== null ? (
            <>
              <button
                type="button"
                aria-label="Goto Page 1"
                className="inline-flex h-10 items-center justify-center gap-4 rounded stroke-slate-700 px-4 text-sm font-medium text-slate-100 transition duration-300 hover:bg-emerald-50 hover:stroke-emerald-500 hover:text-emerald-500 focus:bg-emerald-50 focus:stroke-emerald-600 focus:text-emerald-600 focus-visible:outline-none"
                onClick={prevPage}
              >
                <span className="order-2">Anterior</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="-mx-1 h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  role="graphics-symbol"
                  aria-labelledby="title-09 desc-09"
                >
                  <title id="title-09">Previous page</title>
                  <desc id="desc-09">link to previous page</desc>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
            </>
          ) : null}
        </li>
        {characters.info?.pages > 1 && (
          <p className="mx-2">
            Página {currentPage}/{characters.info?.pages}
          </p>
        )}
        <li>
          {characters.info?.next !== null ? (
            <>
              <button
                type="button"
                aria-label="Goto Page 3"
                className="inline-flex h-10 items-center justify-center gap-4 rounded stroke-slate-700 px-4 text-sm font-medium text-slate-100 transition duration-300 hover:bg-emerald-50 hover:stroke-emerald-500 hover:text-emerald-500 focus:bg-emerald-50 focus:stroke-emerald-600 focus:text-emerald-600 focus-visible:outline-none"
                onClick={nextPage}
              >
                <span>Siguiente </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="-mx-1 h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  role="graphics-symbol"
                  aria-labelledby="title-10 desc-10"
                >
                  <title id="title-10">Next page</title>
                  <desc id="desc-10">link to next page</desc>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>{" "}
            </>
          ) : null}
        </li>
      </ul>
    </nav>
  );
};
