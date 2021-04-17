import React from "react";
import { ICardFunctions } from "models/ICard";

export const CardComponent = (props: ICardFunctions) => {
  const { list, savePoke, isSearch } = props;

  return (
    <>
      <div className="w-full bg-indigo-300 dark:bg-yellow-400 dark:hover:bg-yellow-700 rounded-lg shadow-xl mb-6 p-3">
        <img
          src={list.image}
          alt="pokeimagen"
          className="filter drop-shadow-lg  mx-auto"
        />
        <div className="flex flex-col items-center space-y-2">
          <p className="uppercase text-3xl font-semibold">{list.name}</p>

          {isSearch ? (
            <button
              onClick={savePoke}
              className="bg-green-800 text-white w-[110px] rounded-md hover:bg-green-600
        transform hover:scale-125 transition ease-in duration-300"
            >
              agregar
            </button>
          ) : null}
        </div>
      </div>
    </>
  );
};
