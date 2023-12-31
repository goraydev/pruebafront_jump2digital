import React from "react";
import { Card } from "./Card";

export const Cards = ({ characters, isLoading }) => {


  if (characters.error) {
    return (
      <div
        className="w-full px-4 py-3 text-sm text-pink-500 border border-pink-100 rounded bg-pink-50"
        role="alert"
      >
        <p>Personaje no encontrado, realice otra búsqueda</p>
      </div>
    );
  }

  return (
    <>
      {isLoading ? (
        <>
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-labelledby="title-04a desc-04a"
            aria-live="polite"
            aria-busy="true"
            className="animate h-10 w-10 animate-spin container mt-24"
          >
            <title id="title-04a">Icon title</title>
            <desc id="desc-04a">Some desc</desc>
            <circle
              cx="12"
              cy="12"
              r="10"
              className="stroke-slate-200"
              strokeWidth="4"
            />
            <path
              d="M12 22C14.6522 22 17.1957 20.9464 19.0711 19.0711C20.9464 17.1957 22 14.6522 22 12C22 9.34784 20.9464 6.8043 19.0711 4.92893C17.1957 3.05357 14.6522 2 12 2"
              className="stroke-emerald-500"
              strokeWidth="4"
            />
          </svg>
        </>
      ) : (
        <ul className="gridcards">
          {characters?.results?.map((character) => (
            <Card key={character.id} character={character} />
          ))}
        </ul>
      )}
    </>
  );
};
