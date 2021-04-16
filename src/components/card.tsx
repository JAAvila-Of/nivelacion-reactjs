import { useContext, useCallback } from "react";
import { useGetPokes } from "hooks/useGetPoke";
import PokeDataContext from "contexts/PokeDataContext";
import PokeListContext from "contexts/PokeDataList";

import { ICard } from "models/ICard";

export const Card = (prop: any) => {
  const { name } = prop;
  const { searched, setSearched } = useContext(PokeDataContext);
  const { pokes, setPokes } = useContext(PokeListContext);
  const { dataPoke, isLoading, isSearch } = useGetPokes(name);

  const savePoke = async () => {
    setPokes([...pokes, dataPoke]);
  };

  setSearched(dataPoke);

  if (searched.name === name) {
    return (
      <>
        <div className="w-1/2 bg-indigo-300 dark:bg-yellow-400 dark:hover:bg-yellow-700 rounded-lg shadow-xl mb-6 p-3">
          <img
            src={searched.image}
            alt="pokeimagen"
            className="filter drop-shadow-lg"
          />
          <div className="flex flex-col items-center">
            <p>{searched.name}</p>
            <button
              onClick={savePoke}
              className="bg-green-800 text-white w-[110px] rounded-md hover:bg-green-600
              transform hover:scale-125 transition ease-in duration-300"
            >
              agregar
            </button>
          </div>
        </div>
      </>
    );
  }

  if (!isSearch) {
    return <div>Busca un Pokemon</div>;
  }

  if (isLoading) {
    return <div>Buscando...</div>;
  }

  return (
    <>
      <div>
        <img src={dataPoke.image} alt="pokeimagen" />
        <p>{dataPoke.name}</p>
        <button onClick={savePoke}>agregar</button>
      </div>
    </>
  );
};
