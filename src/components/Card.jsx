import React from "react";

export const Card = ({ character }) => {
  return (
    <>
      {
        <div className="flex flex-col gap-2 items-center h-64 justify-stretch bg-teal-700 py-4 rounded-xl border-2 border-yellow-100 shadow-xl hover:border-yellow-200 hover:scale-105 transition">
          <img
            src={character.image}
            alt={`${character.name}`}
            width="100"
            height="100"
            loading="lazy"
            className="rounded-full -mt-6"
          />
          <div className="flex flex-col gap-1 items-center">
            <p>{character.name}</p>
            <div className="flex items-center gap-1">
              <span className="rounded-full w-3 h-3 bg-emerald-500"></span>
              <span className="inline-flex items-center justify-center gap-1 rounded bg-emerald-500 px-1.5 text-sm text-white">
                {character.species}
              </span>
            </div>
            <p>{character.origin.name}</p>
          </div>
        </div>
      }
    </>
  );
};
