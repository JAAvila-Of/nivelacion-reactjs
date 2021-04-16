import React, { useContext } from "react";
import PokeListContext from "contexts/PokeDataList";

export const Home = () => {
  const { pokes } = useContext(PokeListContext);

  return (
    <>
      {pokes.map((poke) => {
        return (
          <div>
            <img src={poke.image} alt="pokeimagen" />
            <p>{poke.name}</p>
          </div>
        );
      })}
    </>
  );
};
